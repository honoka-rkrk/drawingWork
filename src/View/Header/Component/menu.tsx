import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuButton from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import LoginDialog from '../../Body/Home/Container/loginDialog';
import { User } from '../../../Other/Model/user';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      position: 'absolute',
      right: '2rem'
    }
  })
);

type MenuProps = {
  handleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  handleClose: () => void;
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onInquiryClick: () => void;
  onGalleryClick: () => void;
  isDisabled: boolean;
};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const {
    handleMenu = () => undefined,
    anchorEl = null,
    menuOpen = false,
    handleClose = () => undefined,
    dialogOpen = false,
    setDialogOpen = () => undefined,
    onInquiryClick = () => undefined,
    onGalleryClick = () => undefined,
    isDisabled = false
  } = props;
  const styles = useStyle();
  return (
    <>
      <IconButton
        className={styles.menuButton}
        color='inherit'
        aria-label='menubutton'
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
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
        <MenuItem onClick={onInquiryClick} disabled={isDisabled}>
          お問い合わせ
        </MenuItem>
        <MenuItem onClick={onGalleryClick} disabled={isDisabled}>
          My Gallery
        </MenuItem>
      </MenuButton>
    </>
  );
};

export default Menu;
