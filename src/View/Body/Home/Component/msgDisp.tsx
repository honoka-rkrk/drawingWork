import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';

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
    textStylePC: {
      color: theme.palette.darkGreen.main,
      fontSize: '24px'
    },
    textStylePhone: {
      color: theme.palette.darkGreen.main,
      fontSize: '14px'
    },
    textStyleMaxPC: {
      color: theme.palette.red.main,
      fontSize: '24px',
      fontFamily: 'Mplus'
    },
    textStyleMaxPhone: {
      color: theme.palette.red.main,
      fontSize: '14px',
      fontFamily: 'Mplus'
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
      <MediaQuery query='(min-width:767px)'>
        {isMax ? (
          <Paper className={styles.msgStyle}>
            <Typography className={styles.textStyleMaxPC}>{msg}</Typography>
          </Paper>
        ) : (
          <Paper className={styles.msgStyle}>
            <Typography className={styles.textStylePC}>{msg}</Typography>
          </Paper>
        )}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {isMax ? (
          <Paper className={styles.msgStyle}>
            <Typography className={styles.textStyleMaxPhone}>{msg}</Typography>
          </Paper>
        ) : (
          <Paper className={styles.msgStyle}>
            <Typography className={styles.textStylePhone}>{msg}</Typography>
          </Paper>
        )}
      </MediaQuery>
    </>
  );
};

export default MsgDisp;
