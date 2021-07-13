import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import CompExitBtn from '../Component/exitBtn';

const ExitBtn: React.FC = () => {
  const [cfmOpen, setCfmOpen] = useState<boolean>(false);
  const history = useHistory();

  const onClick = useCallback(() => {
    setCfmOpen(true);
  }, []);

  const clickOK = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <CompExitBtn
      cfmOpen={cfmOpen}
      setCfmOpen={setCfmOpen}
      onClick={onClick}
      clickOK={clickOK}
    />
  );
};

export default ExitBtn;
