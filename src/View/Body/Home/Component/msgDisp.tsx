import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    msgStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      padding: '1.5rem'
    },
    msgStyleMax: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      padding: '1.5rem'
    },
    textStyle: {
      color: theme.palette.darkGreen.main,
      fontSize: '14px'
    },
    textStyleMax: {
      color: theme.palette.red.main,
      fontSize: '14px'
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
        <Paper className={styles.msgStyleMax}>
          <Typography className={styles.textStyleMax}>{msg}</Typography>
        </Paper>
      ) : (
        <Paper className={styles.msgStyle}>
          <Typography className={styles.textStyle}>{msg}</Typography>
        </Paper>
      )}
    </>
  );
};

export default MsgDisp;
