import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AllPicture from '../Container/allPicture';
import Timer from '../Container/timer';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 81% '
    },
    timer: {
      margin: '1em'
    },
    dispPictureCommon: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingTop: '0.5%',
      paddingLeft: '0.5%',
      paddingRight: '0.5%'
    }
  })
);

const DispPicture: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.timer}>
        <Timer />
      </Box>
      <Box className={styles.dispPictureCommon}>
        <AllPicture />
      </Box>
    </>
  );
};

export default DispPicture;
