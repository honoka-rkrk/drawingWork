import React from 'react';

import CompSendBtn from '../Component/sendBtn';

type SendBtnProps = {
  myFiles: File[];
  clickable: boolean;
  handleUpload: (accepterdImg: any) => Promise<void>;
};

const SendBtn: React.FC<SendBtnProps> = (props: SendBtnProps) => {
  const { myFiles, clickable, handleUpload } = props;
  return (
    <CompSendBtn
      myFiles={myFiles}
      clickable={clickable}
      handleUpload={handleUpload}
    />
  );
};

export default SendBtn;
