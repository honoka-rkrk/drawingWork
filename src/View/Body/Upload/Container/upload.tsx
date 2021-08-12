import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import CompUpload from '../Component/upload';

const Upload: React.FC = () => {
  const [timerEnd, setTimerEnd] = useState<boolean>(false);
  const [isUpd, setIsUpd] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if (timerEnd && isUpd) {
      history.push('/dispPicture');
    }
  });

  return <CompUpload setTimerEnd={setTimerEnd} setIsUpd={setIsUpd} />;
};

export default Upload;
