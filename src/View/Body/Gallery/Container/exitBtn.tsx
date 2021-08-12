import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import CompExitBtn from '../Component/exitBtn';

const ExitBtn: React.FC = () => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push('/');
  }, []);

  return <CompExitBtn onClick={onClick} />;
};

export default ExitBtn;
