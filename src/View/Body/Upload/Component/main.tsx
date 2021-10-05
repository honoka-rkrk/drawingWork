import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Upload from '../Container/upload';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '5% 10% 5% 75% 5%',
      gridTemplateColumns: '3% 94% 3%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 1.89% 4.32% 65.74% 3.75% 6.75% 6.75%',
      gridTemplateColumns: '2% 96% 2%',
      height: 'calc(100vh - 70px)'
    },
    background: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      height: '108px',
      width: '375px'
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
            <Upload />
          </Box>
        </MediaQuery>
        <MediaQuery query='(max-width:767px)'>
          <Box className={styles.rootPhone}>
            <Upload />
          </Box>
        </MediaQuery>
      </Box>
    </>
  );
};

export default Main;
