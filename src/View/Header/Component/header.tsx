import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuCon from '../Container/menu';
import LoginOut from '../Container/loginout';
import { User } from '../../../Other/Model/user';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: '#22323C'
    }
  })
);

const Header: React.FC = () => {
  const styles = useStyle();
  return (
    <div className={styles.root}>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar>
          <LoginOut />
          <MenuCon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
