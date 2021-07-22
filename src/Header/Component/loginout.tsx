import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuCon from '../Container/menu';

import LoginDialog from '../../Home/Container/loginDialog';
import { User } from '../../Model/user';

type LoginOutProps = {
  user: User | null;
  isLogined: boolean;
  handleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  handleClose: () => void;
  signOut: () => void;
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loginClick: () => void;
};

const LoginOut: React.FC<LoginOutProps> = (props: LoginOutProps) => {
  const {
    user = null,
    isLogined = false,
    handleMenu = () => undefined,
    anchorEl = null,
    menuOpen = false,
    handleClose = () => undefined,
    signOut = () => undefined,
    dialogOpen = false,
    setDialogOpen = () => undefined,
    loginClick = () => undefined
  } = props;
  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        {user && user.photoUrl && isLogined ? (
          <Avatar src={user.photoUrl} />
        ) : (
          <AccountCircle />
        )}
      </IconButton>
      <Menu
        id='account-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={menuOpen}
        onClose={handleClose}
      >
        {isLogined ? (
          <MenuItem onClick={signOut}>ログアウト</MenuItem>
        ) : (
          <MenuItem onClick={loginClick}>ログイン</MenuItem>
        )}
      </Menu>
      <MenuCon />
      <LoginDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};

export default LoginOut;
