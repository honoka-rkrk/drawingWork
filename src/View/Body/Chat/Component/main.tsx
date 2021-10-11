import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chat from '../Container/chat';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '2.1% 8.4% 3.36% 48.72% 10.08% 21.44% 5.9%',
      gridTemplateColumns:
        '11.2% 2.24% 43.56% 2.24% 2.24% 2.52% 24.8% 1.4% 1.4% 5.6% 2.8%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 1.89% 64.36% 8.1% 8.1% 6.75%',
      gridTemplateColumns: '2% 96% 2%',
      height: 'calc(100vh - 70px)'
    },
    backgroundPC: {
      backgroundColor: theme.palette.green.main,
      gridRow: '1',
      gridColumn: '1'
    },
    backgroundRoot: {
      display: 'grid',
      gridTemplateRows: '80% 20%',
      gridColumn: '100%'
    },
    backgroundPhone: {
      backgroundColor: theme.palette.green.main,
      marginTop: '10px',
      gridRow: '1',
      gridColumn: '1'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.backgroundRoot}>
          <Box className={styles.backgroundPC}>
            <Box className={styles.rootPC}>
              <Chat />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.backgroundRoot}>
          <Box className={styles.backgroundPhone}>
            <Box className={styles.rootPhone}>
              <Chat />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
