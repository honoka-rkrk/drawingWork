import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import MsgDisp from '../Container/msgDisp';
import EntryBtn from '../Container/Btn/entryBtn';
import LoginBtn from '../Container/Btn/loginBtn';

const useStyle = makeStyles(() =>
  createStyles({
    msgDisp: {
      gridRow: 2,
      gridColumn: 2,
      height: '100%'
    },
    buttonBox: {
      justifyContent: 'center',
      gridRow: 6,
      gridColumn: 2,
      display: 'grid',
      gridTemplateColumns: '40% 20% 40%'
    },
    entry: {
      gridColumn: 1
    },
    login: {
      gridColumn: 3
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
      <Box className={styles.msgDisp}>
        <MsgDisp isMax={isMax} />
      </Box>
      <Box className={styles.buttonBox}>
        <Box className={styles.entry}>
          <EntryBtn isMax={isMax} setIsMax={setIsMax} />
        </Box>
        <Box className={styles.login}>
          <LoginBtn />
        </Box>
      </Box>
    </>
  );
};

export default Home;
