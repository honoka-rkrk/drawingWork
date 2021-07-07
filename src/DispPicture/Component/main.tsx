import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DispPicture from '../Container/dispPicrue';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingTop: '0.5%',
      paddingLeft: '0.5%',
      paddingRight: '0.5%'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.root}>
      <DispPicture />
    </Box>
  );
};

export default Main;
