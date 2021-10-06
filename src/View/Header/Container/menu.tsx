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
  const [isInquiryDisabled, setIsInquiryDisabled] = useState<boolean>(false);
  const [isGalleryDisabled, setIsGalleryDisabled] = useState<boolean>(false);
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (isEntryInfo) {
      isEntryInfo.entryState
        ? setIsInquiryDisabled(true)
        : setIsInquiryDisabled(false);

      isEntryInfo.entryState
        ? setIsGalleryDisabled(true)
        : setIsGalleryDisabled(false);
    } else {
      setIsInquiryDisabled(false);
      user ? setIsGalleryDisabled(false) : setIsGalleryDisabled(true);
    }
  }, [isEntryInfo?.entryState, user]);

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
      isInquiryDisabled={isInquiryDisabled}
      isGalleryDisabled={isGalleryDisabled}
      isAuthor={isAuthor}
    />
  );
};

export default Menu;
