import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Gallery from '../Container/gallery';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.green.main,
      width: '100%'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.background}>
      <Gallery />
    </Box>
  );
};

export default Main;
