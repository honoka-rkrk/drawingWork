import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { RootState } from '../../../Other/Store/rootReducer';
import MenuIcons from '../Container/menu';
import LoginOut from '../Container/loginout';
import Exit from '../Container/exit';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.darkBlue.main
    }
  })
);

const Header: React.FC = () => {
  const styles = useStyle();
  const isEntryInfo = useSelector((state: RootState) => state.isEntry.isEntryInfo);
  return (
    <div className={styles.root}>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar>
          <LoginOut />
          <MenuIcons />
          {isEntryInfo && isEntryInfo.entryState ? <Exit /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
