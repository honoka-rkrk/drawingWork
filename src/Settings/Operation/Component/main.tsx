import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Operation from '../Container/operation';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles(() =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '10% 80% 10%',
      gridTemplateColumns: '10% 80% 10%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '10% 80% 10%',
      gridTemplateColumns: '10% 80% 10%',
      height: 'calc(100vh - 70px)'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.rootPC}>
          <Operation />
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.rootPhone}>
          <Operation />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
