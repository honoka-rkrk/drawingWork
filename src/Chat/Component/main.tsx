import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chat from '../Container/chat';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 70% 3% 10% 1%',
      gridTemplateColumns: '10% 80% 10%',
      height: '100vh'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.root}>
      <Chat />
    </Box>
  );
};

export default Main;
