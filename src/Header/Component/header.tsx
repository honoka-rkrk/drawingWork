import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import LoginDialog from '../../Home/Container/loginDialog';
import { User } from '../../Model/user';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: theme.spacing(2)
    }
  })
);

type HeaderProps = {
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

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
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
  const styles = useStyle();
  return (
    <div className={styles.root}>
      <AppBar position='static'>
        <Toolbar>
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
            id='menu-appbar'
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
          <IconButton
            className={styles.menuButton}
            color='inherit'
            aria-label='menubutton'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <LoginDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </div>
  );
};

export default Header;
