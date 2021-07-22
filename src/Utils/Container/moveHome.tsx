import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import CompMoveHome from '../Component/moveHome';

const MoveHome: React.FC = () => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push('/');
  }, []);

  return <CompMoveHome onClick={onClick} />;
};

export default MoveHome;
