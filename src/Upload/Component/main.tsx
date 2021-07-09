import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Upload from '../Container/upload';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles(() =>
  createStyles({
    rootPC: {
      display: 'grid',
      gridTemplateRows: '5% 10% 5% 75% 5%',
      gridTemplateColumns: '3% 94% 3%',
      height: 'calc(100vh - 70px)'
    },
    rootPhone: {
      display: 'grid',
      gridTemplateRows: '2% 16% 2% 78% 2%',
      gridTemplateColumns: '3% 94% 3%',
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
          <Upload />
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.rootPhone}>
          <Upload />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Main;
