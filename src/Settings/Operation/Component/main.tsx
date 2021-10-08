import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Operation from '../Container/operation';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '4.3% 39.13% 56.57%',
      gridTemplateColumns: '11.34% 77.32% 11.34%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '5% 85% 10%',
      gridTemplateColumns: '6% 88% 6%',
      height: '919px'
    },
    background: {
      with: '100%',
      height: '919px',
      backgroundColor: theme.palette.settings.main
    },
    background2PC: {
      gridRow: '2',
      gridColumn: '2',
      with: '100%',
      backgroundColor: theme.palette.darkBlue.main,
      borderRadius: '25px',
      display: 'flex'
    },
    background2Phone: {
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
            <Box className={styles.background2PC}>
              <Operation />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.background}>
          <Box className={styles.rootPhone}>
            <Box className={styles.background2Phone}>
              <Operation />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
