import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DispPicture from '../Container/dispPicrue';
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
      gridTemplateRows: '1.7% 8.1% 2.2% 88%',
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
      height: '80px',
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
          <DispPicture />
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.backgroundPhone}>
          <Box className={styles.rootPhone}>
            <DispPicture />
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
