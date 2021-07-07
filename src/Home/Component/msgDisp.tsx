import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() =>
  createStyles({
    msgStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em'
    },
    msgStyleMax: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      color: '#ff1744'
    }
  })
);

type MsgDispProps = {
  isMax: boolean;
  msg: string;
};

const MsgDisp: React.FC<MsgDispProps> = (props: MsgDispProps) => {
  const { isMax = false, msg = '' } = props;
  const styles = useStyle();

  return (
    <>
      {isMax ? (
        <Paper className={styles.msgStyleMax}>{msg}</Paper>
      ) : (
        <Paper className={styles.msgStyle}>{msg}</Paper>
      )}
    </>
  );
};

export default MsgDisp;
