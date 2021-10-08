import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Other/Store/rootReducer';
import CompMsgDisp from '../Component/msgDisp';

type MsgDispProps = {
  isMax: boolean;
  nextHour: number;
  nextMinutes: number;
};

const MsgDisp: React.FC<MsgDispProps> = (props: MsgDispProps) => {
  const { isMax, nextHour, nextMinutes } = props;
  const [msg, setMsg] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const openTimeInfo = useSelector(
    (state: RootState) => state.openTime.openTimeInfo
  );

  useEffect(() => {
    const nowTime = moment();
    const startTime = moment()
      .startOf('day')
      .add(openTimeInfo.hour, 'hours')
      .add(openTimeInfo.minutes, 'minutes')
      .subtract(5, 'minutes');
    const timerDiff = startTime.diff(nowTime, 'minutes');
    if (timerDiff > 0) {
      setMsg(
        '開催は' +
          openTimeInfo.hour +
          '時' +
          openTimeInfo.minutes +
          '分からです。開催時刻までお待ちください。'
      );
      setOpen(false);
    } else if (timerDiff < -15) {
      setMsg(
        '本日の受付は終了しました。次の開催は明日の' +
          nextHour +
          '時' +
          nextMinutes +
          '分からです。'
      );
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [setMsg, setOpen, openTimeInfo, nextHour, nextMinutes]);

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
