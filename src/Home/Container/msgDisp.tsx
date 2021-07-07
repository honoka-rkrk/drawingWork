import React, { useState, useEffect } from 'react';

import CompMsgDisp from '../Component/msgDisp';

type MsgDispProps = {
  isMax: boolean;
};

const MsgDisp: React.FC<MsgDispProps> = (props: MsgDispProps) => {
  const { isMax } = props;
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    if (isMax) {
      setMsg('上限人数に達しました。');
    } else {
      setMsg('エントリーボタンを押すと参加できます。');
    }
  }, [setMsg, isMax]);

  return <CompMsgDisp isMax={isMax} msg={msg} />;
};

export default MsgDisp;
