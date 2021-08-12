import React, { useState } from 'react';
import CompChat from '../Component/chat';

const Chat: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  return <CompChat isStart={isStart} setIsStart={setIsStart} />;
};

export default Chat;
