import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Operation from '../Container/operation';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '10% 80% 10%',
      gridTemplateColumns: '10% 80% 10%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '5% 80% 10%',
      gridTemplateColumns: '6% 88% 6%',
      height: '919px'
    },
    background: {
      with: '100%',
      height: '919px',
      backgroundColor: theme.palette.settings.main
    },
    background2: {
      gridRow: '2',
      gridColumn: '2',
      backgroundColor: theme.palette.darkBlue.main,
      borderRadius: '25px',
      display: 'flex',
      flexFlow: 'column'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.background}>
          <Box className={styles.rootPC}>
            <Operation />
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.background}>
          <Box className={styles.rootPhone}>
            <Box className={styles.background2}>
              <Operation />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
