import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Upload from '../Container/upload';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '3.1% 8.4% 9.34% 20.32% 8.82% 16.8% 8.82% 20.22% 3.64%',
      gridTemplateColumns: '11.2% 34.6% 14% 21.16% 7.84% 11.2%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2.7% 8.1% 1.89% 4.32% 65.74% 3.75% 6.75% 6.75%',
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
      gridTemplateRows: '15% 85%',
      gridColumn: '100%'
    },
    backgroundPhone: {
      backgroundColor: theme.palette.green.main,
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
              <Upload />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.backgroundRoot}>
          <Box className={styles.backgroundPhone}>
            <Box className={styles.rootPhone}>
              <Upload />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
