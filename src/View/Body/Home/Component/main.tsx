import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Home from '../Container/home';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '3% 7% 3% 3% 81% 3%',
      gridTemplateColumns: '10% 80% 10%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 2.7% 67.6% 1.35% 1.35% 6.75% 1.35% 6.75% 1.35%',
      gridTemplateColumns: '2% 96% 2%',
      height: 'calc(100vh - 70px)'
    },
    background: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      height: '610px',
      width: '375px'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.background}>
        <MediaQuery query='(min-width:767px)'>
          <Box className={styles.rootPC}>
            <Home />
          </Box>
        </MediaQuery>
        <MediaQuery query='(max-width:767px)'>
          <Box className={styles.rootPhone}>
            <Home />
          </Box>
        </MediaQuery>
      </Box>
    </>
  );
};

export default Main;
