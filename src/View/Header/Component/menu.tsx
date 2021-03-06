import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuButton from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    menuButtonPC: {
      position: 'absolute',
      right: '2rem',
      color: theme.palette.white.main
    },
    menuButtonPhone: {
      position: 'absolute',
      right: '0.5rem',
      color: theme.palette.white.main
    },
    menuItemText: {
      fontFamily: 'Kosugi Maru',
      color: theme.palette.darkGreen.main
    }
  })
);

type MenuProps = {
  handleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  handleClose: () => void;
  onInquiryClick: () => void;
  onGalleryClick: () => void;
  onSettingsClick: () => void;
  isInquiryDisabled: boolean;
  isGalleryDisabled: boolean;
  isAuthor: boolean;
};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const {
    handleMenu = () => undefined,
    anchorEl = null,
    menuOpen = false,
    handleClose = () => undefined,
    onInquiryClick = () => undefined,
    onGalleryClick = () => undefined,
    onSettingsClick = () => undefined,
    isInquiryDisabled = false,
    isGalleryDisabled = false,
    isAuthor = false
  } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <IconButton
          className={styles.menuButtonPC}
          color='inherit'
          aria-label='menubutton'
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <IconButton
          className={styles.menuButtonPhone}
          color='inherit'
          aria-label='menubutton'
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
      </MediaQuery>
      <MenuButton
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
        <MenuItem onClick={onInquiryClick} disabled={isInquiryDisabled}>
          <Typography className={styles.menuItemText}>??????????????????</Typography>
        </MenuItem>
        <MenuItem onClick={onGalleryClick} disabled={isGalleryDisabled}>
          <Typography className={styles.menuItemText}>My Gallery</Typography>
        </MenuItem>
        {isAuthor ? (
          <MenuItem onClick={onSettingsClick}>
            {' '}
            <Typography className={styles.menuItemText}>??????</Typography>
          </MenuItem>
        ) : null}
      </MenuButton>
    </>
  );
};

export default Menu;
