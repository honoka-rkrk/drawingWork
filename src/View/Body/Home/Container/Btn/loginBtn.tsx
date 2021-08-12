import React, { useCallback, useState, useContext, useEffect } from 'react';

import { UserContext } from '../../../../../Other/Context/contexts';
import CompLoginBtn from '../../Component/Btn/loginBtn';

const LoginBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user]);

  const onClose = () => {
    setOpen(false);
  };

  const loginClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <CompLoginBtn
      loginClick={loginClick}
      open={open}
      onClose={onClose}
      disabled={disabled}
    />
  );
};

export default LoginBtn;
