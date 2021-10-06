import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MenuCon from '../Container/menu';

import { User } from '../../../Other/Model/user';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    menuItemText: {
      fontFamily: 'Kosugi Maru',
      color: theme.palette.darkGreen.main
    }
  })
);

type LoginOutProps = {
  user: User | null;
  isLogined: boolean;
  handleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  handleClose: () => void;
  signOut: () => void;
  loginClick: () => void;
  isDisabled: boolean;
};

const LoginOut: React.FC<LoginOutProps> = (props: LoginOutProps) => {
  const styles = useStyle();
  const {
    user = null,
    isLogined = false,
    handleMenu = () => undefined,
    anchorEl = null,
    menuOpen = false,
    handleClose = () => undefined,
    signOut = () => undefined,
    loginClick = () => undefined,
    isDisabled = false
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
          <MenuItem onClick={signOut} disabled={isDisabled}>
            <Typography className={styles.menuItemText}>ログアウト</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={loginClick}>
            <Typography className={styles.menuItemText}>ログイン</Typography>
          </MenuItem>
        )}
      </Menu>
      <MenuCon />
    </>
  );
};

export default LoginOut;
