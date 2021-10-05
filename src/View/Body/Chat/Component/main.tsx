import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chat from '../Container/chat';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '3% 10% 3% 70% 3% 10% 1%',
      gridTemplateColumns: '10% 80% 10%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 1.89% 64.36% 8.1% 8.1% 6.75%',
      gridTemplateColumns: '2% 96% 2%',
      height: 'calc(100vh - 70px)'
    },
    background: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      height: '610px',
      width: '100%'
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
            <Chat />
          </Box>
        </MediaQuery>
        <MediaQuery query='(max-width:767px)'>
          <Box className={styles.rootPhone}>
            <Chat />
          </Box>
        </MediaQuery>
      </Box>
    </>
  );
};

export default Main;
