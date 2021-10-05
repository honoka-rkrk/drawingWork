import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

import MsgDisp from '../Container/msgDisp';
import DispPicture from '../Container/dispPicture';
import EntryBtn from '../Container/Btn/entryBtn';
import LoginBtn from '../Container/Btn/loginBtn';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    msgDisp: {
      gridRow: 2,
      gridColumn: 2,
      height: '100%'
    },
    dispCommonPC: {
      display: 'grid',
      gridTemplateColumns: '50.1% 11.15% 36% 2.75%',
      gridTemplateRows: '100%',
      gridRow: 4,
      gridColumn: 2
    },
    title: {
      gridRow: 4,
      gridColumn: 2
    },
    picDispPC: {
      gridRow: 1,
      gridColumn: 1,
      height: '100%'
    },
    picDispPhone: {
      gridRow: 4,
      gridColumn: 2,
      height: '100%'
    },
    buttonBoxPC: {
      justifyContent: 'center',
      gridRow: 1,
      gridColumn: 3,
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '100%',
      gridTemplateRows: '18.3% 12.78% 33.92% 12.78% 22.22%'
    },
    entryPC: {
      gridRow: 2,
      width: '100%'
    },
    entryPhone: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gridRow: 7,
      gridColumn: 2,
      width: '100%',
      height: '100%'
    },
    loginPC: {
      gridRow: 4,
      width: '100%'
    },
    loginPhone: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      gridRow: 9,
      gridColumn: 2
    }
  })
);

type HomeProps = {
  isMax: boolean;
  setIsMax: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { isMax = false, setIsMax = () => undefined } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.msgDisp}>
          <MsgDisp isMax={isMax} />
        </Box>
        <Box className={styles.dispCommonPC}>
          <Box className={styles.picDispPC}>
            <DispPicture />
          </Box>
          <Box className={styles.buttonBoxPC}>
            <Box className={styles.entryPC}>
              <EntryBtn isMax={isMax} setIsMax={setIsMax} />
            </Box>
            <Box className={styles.loginPC}>
              <LoginBtn />
            </Box>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.msgDisp}>
          <MsgDisp isMax={isMax} />
        </Box>
        <Box className={styles.picDispPhone}>
          <DispPicture />
        </Box>
        <Box className={styles.entryPhone}>
          <EntryBtn isMax={isMax} setIsMax={setIsMax} />
        </Box>
        <Box className={styles.loginPhone}>
          <LoginBtn />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Home;
