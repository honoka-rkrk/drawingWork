import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import { UserContext } from '../../../../../Other/Context/contexts';
import CompLoginBtn from '../../Component/Btn/loginBtn';

const LoginBtn: React.FC = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user]);

  const loginClick = useCallback(() => {
    history.push('/login');
  }, []);

  return <CompLoginBtn loginClick={loginClick} disabled={disabled} />;
};

export default LoginBtn;
