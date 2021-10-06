import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Home from '../Container/home';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '3.36% 8.4% 5.04% 80.1% 3.1%',
      gridTemplateColumns: '10.8% 78.4% 10.8%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 2.7% 67.6% 1.35% 1.35% 6.75% 1.35% 6.75% 1.35%',
      gridTemplateColumns: '2% 96% 2%',
      height: 'calc(100vh - 70px)'
    },
    backgroundPC: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      height: '718px',
      width: '100%'
    },
    backgroundPhone: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      height: '580px',
      width: '100%'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.backgroundPC}>
          <Box className={styles.rootPC}>
            <Home />
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.backgroundPhone}>
          <Box className={styles.rootPhone}>
            <Home />
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
