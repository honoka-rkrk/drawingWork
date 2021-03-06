import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    clockStylePC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '40px',
      fontSize: '24px',
      backgroundColor: theme.palette.blue.second,
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    },
    clockStylePhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      fontSize: '1em',
      gridColumn: 3,
      gridRow: 1,
      backgroundColor: theme.palette.blue.second,
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    },
    clockStyleDangerPC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '24px',
      borderRadius: '40px',
      backgroundColor: theme.palette.red.second,
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    },
    clockStyleDangerPhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1em',
      borderRadius: '25px',
      gridColumn: 3,
      gridRow: 1,
      backgroundColor: theme.palette.red.second,
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    }
  })
);

type TimerProps = {
  tmMinutes: string;
  tmSeconds: string;
  danger: boolean;
  isEnd: boolean;
  clickOK: () => void;
};

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const {
    tmMinutes = '',
    tmSeconds = '',
    danger = false,
    isEnd = false,
    clickOK = () => undefined
  } = props;
  const styles = useStyle();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {danger ? (
          <Paper className={styles.clockStyleDangerPC}>
            {tmMinutes && tmSeconds ? tmMinutes + '???' + tmSeconds + '???' : null}
          </Paper>
        ) : (
          <Paper className={styles.clockStylePC}>
            {tmMinutes && tmSeconds ? tmMinutes + '???' + tmSeconds + '???' : null}
          </Paper>
        )}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {danger ? (
          <Paper className={styles.clockStyleDangerPhone}>
            {tmMinutes && tmSeconds ? tmMinutes + '???' + tmSeconds + '???' : null}
          </Paper>
        ) : (
          <Paper className={styles.clockStylePhone}>
            {tmMinutes && tmSeconds ? tmMinutes + '???' + tmSeconds + '???' : null}
          </Paper>
        )}
      </MediaQuery>
      <InfDialog
        infOpen={isEnd}
        title={'??????????????????'}
        msg={'????????????????????????????????????????????????????????????????????????????????????'}
        clickOK={clickOK}
      />
    </>
  );
};

export default Timer;
