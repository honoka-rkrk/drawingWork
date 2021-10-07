import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Login from '../Container/login';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '12.3% 31.57% 56.13%',
      gridTemplateColumns: '37.8% 24.4% 37.8%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '5.4% 35.1% 59.5%',
      gridTemplateColumns: '6.48% 87.04% 6.48%',
      height: 'calc(100vh - 70px)'
    },
    background: {
      with: '100%',
      height: '100vh',
      backgroundColor: theme.palette.settings.main
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.background}>
          <Box className={styles.rootPC}>
            <Login />
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.background}>
          <Box className={styles.rootPhone}>
            <Login />
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
