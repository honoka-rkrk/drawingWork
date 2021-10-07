import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Login from '../Container/login';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.green.main
    },
    root: {
      display: 'grid',
      gridTemplateRows: '5% 50% 45%',
      gridTemplateColumns: '10.8% 78.4% 10.8%',
      height: 'calc(100vh - 70px)'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.background}>
      <Box className={styles.root}>
        <Login />
      </Box>
    </Box>
  );
};

export default Main;
