import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { UserContext, FirebaseContext } from '../../Context/contexts';
import CompLoginOut from '../Component/loginout';

const LoginOut: React.FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const history = useHistory();
  const menuOpen = Boolean(anchorEl);
  const signOut =
    auth && user
      ? () => {
          setAnchorEl(null);
          auth.signOut();
          history.replace('/home');
        }
      : () => undefined;

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginClick = () => {
    setAnchorEl(null);
    setDialogOpen(true);
  };

  useEffect(() => {
    if (user) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [user]);
  return (
    <CompLoginOut
      user={user}
      isLogined={isLogined}
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      menuOpen={menuOpen}
      handleClose={handleClose}
      signOut={signOut}
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      loginClick={loginClick}
    />
  );
};

export default LoginOut;
