import React, { useState } from 'react';
import { useHistory } from 'react-router';

import CompMenu from '../Component/menu';

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const history = useHistory();
  const menuOpen = Boolean(anchorEl);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = () => {
    history.push('/inquiry');
    setAnchorEl(null);
  };

  return (
    <CompMenu
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      menuOpen={menuOpen}
      handleClose={handleClose}
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      onClick={onClick}
    />
  );
};

export default Menu;
