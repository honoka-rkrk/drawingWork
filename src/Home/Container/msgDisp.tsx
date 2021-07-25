import React, { useState, useEffect } from 'react';
import moment from 'moment';

import CompMsgDisp from '../Component/msgDisp';

type MsgDispProps = {
  isMax: boolean;
};

const MsgDisp: React.FC<MsgDispProps> = (props: MsgDispProps) => {
  const { isMax } = props;
  const [msg, setMsg] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const nowTime = moment();
    const startTime = moment().startOf('day').add(20, 'hours').add(55, 'minutes');
    const timerDiff = startTime.diff(nowTime, 'minutes');
    console.log(timerDiff);
    if (timerDiff > 0) {
      setMsg('開催は２１時からです。開催時刻までお待ちください。');
      setOpen(false);
    } else if (timerDiff < -15) {
      setMsg('本日の受付は終了しました。次の開催は明日の21時からです。');
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [setMsg, setOpen]);

  useEffect(() => {
    if (open) {
      if (isMax) {
        setMsg('上限人数に達しました。');
      } else {
        setMsg('ログインを行ってエントリーボタンを押すと参加できます。');
      }
    }
  }, [setMsg, isMax, open]);

  return <CompMsgDisp isMax={isMax} msg={msg} />;
};

export default MsgDisp;
