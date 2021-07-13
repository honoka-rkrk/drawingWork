import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// import Picture from '../Container/picture';

const useStyles = makeStyles(() =>
  createStyles({
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

const Result: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.dispPictureCommon}>a</Box>
    </>
  );
};

export default Result;
