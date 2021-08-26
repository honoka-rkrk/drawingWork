import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CompMenu from '../Component/menu';
import { RootState } from '../../../Other/Store/rootReducer';
import { UserContext } from '../../../Other/Context/contexts';

const Menu: React.FC = () => {
  const isEntryInfo = useSelector((state: RootState) => state.isEntry.isEntryInfo);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const history = useHistory();
  const menuOpen = Boolean(anchorEl);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (isEntryInfo) {
      isEntryInfo.entryState ? setIsDisabled(true) : setIsDisabled(false);
    } else {
      setIsDisabled(false);
    }
  }, [isEntryInfo?.entryState]);

  useEffect(() => {
    if (user) {
      if (user.screenName === 'yoake09724211') {
        setIsAuthor(true);
      } else {
        setIsAuthor(false);
      }
    }
  }, [user]);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onInquiryClick = () => {
    history.push('/inquiry');
    setAnchorEl(null);
  };

  const onGalleryClick = () => {
    history.push('/gallery');
    setAnchorEl(null);
  };

  const onSettingsClick = () => {
    history.push('/settings');
  };

  return (
    <CompMenu
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      menuOpen={menuOpen}
      handleClose={handleClose}
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      onInquiryClick={onInquiryClick}
      onGalleryClick={onGalleryClick}
      onSettingsClick={onSettingsClick}
      isDisabled={isDisabled}
      isAuthor={isAuthor}
    />
  );
};

export default Menu;
