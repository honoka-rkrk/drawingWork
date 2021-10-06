import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MediaQuery from 'react-responsive';

import AllPicture from '../Container/allPicture';
import Timer from '../Container/timer';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 81% '
    },
    timerPhone: {
      gridRow: 2,
      gridColumn: 2
    },
    timerPC: {
      gridRow: 2,
      gridColumn: 2
    },
    dispPictureCommon: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingTop: '0.5%',
      paddingLeft: '0.5%',
      paddingRight: '0.5%',
      gridRow: 4,
      gridColumn: 2
    },
    dispPictureCommonPhone: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingTop: '0.5%',
      paddingLeft: '0.5%',
      paddingRight: '0.5%',
      gridRow: 4,
      gridColumn: 2
    }
  })
);

const DispPicture: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.timerPC}>
          <Timer />
        </Box>
        <Box className={styles.dispPictureCommon}>
          <AllPicture />
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.timerPhone}>
          <Timer />
        </Box>
        <Box className={styles.dispPictureCommonPhone}>
          <AllPicture />
        </Box>
      </MediaQuery>
    </>
  );
};

export default DispPicture;
