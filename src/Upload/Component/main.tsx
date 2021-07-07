import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Upload from '../Container/upload';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '5% 10% 5% 75% 5%',
      gridTemplateColumns: '10% 80% 10%',
      height: '100vh'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.root}>
      <Upload />
    </Box>
  );
};

export default Main;
