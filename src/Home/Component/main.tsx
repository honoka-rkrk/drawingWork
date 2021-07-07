import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Home from '../Container/home';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 7% 3% 71% 3% 10% 3%',
      gridTemplateColumns: '10% 80% 10%',
      height: '100vh'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.root}>
      <Home />
    </Box>
  );
};

export default Main;
