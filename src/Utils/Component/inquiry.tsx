import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MoveHome from '../Container/moveHome';

const useStyle = makeStyles((theme: Theme) =>
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
      <Box className={styles.root}>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSdavU0x4E_uuobQQgXaJUJ8YyPXeavQwrvxW1YHpISd2kc9hA/viewform?embedded=true'
          width='640'
          height='765'
        >
          読み込んでいます…
        </iframe>
      </Box>
      <MoveHome />
    </>
  );
};

export default Inquiry;
