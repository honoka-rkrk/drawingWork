import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MoveHome from '../Container/moveHome';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem'
    }
  })
);

const Inquiry: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.root}>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdavU0x4E_uuobQQgXaJUJ8YyPXeavQwrvxW1YHpISd2kc9hA/viewform?embedded=true'
            width='640'
            height='785'
          >
            読み込んでいます…
          </iframe>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.root}>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdavU0x4E_uuobQQgXaJUJ8YyPXeavQwrvxW1YHpISd2kc9hA/viewform?embedded=true'
            width='356px'
            height='655px'
          >
            読み込んでいます…
          </iframe>
        </Box>
      </MediaQuery>
      <MoveHome />
    </>
  );
};

export default Inquiry;
