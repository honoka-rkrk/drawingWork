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
      fontFamily: 'Mplus'
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
      fontFamily: 'Mplus'
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
      fontFamily: 'Mplus'
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
      fontFamily: 'Mplus'
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
            {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
          </Paper>
        ) : (
          <Paper className={styles.clockStylePC}>
            {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
          </Paper>
        )}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {danger ? (
          <Paper className={styles.clockStyleDangerPhone}>
            {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
          </Paper>
        ) : (
          <Paper className={styles.clockStylePhone}>
            {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
          </Paper>
        )}
      </MediaQuery>
      <InfDialog
        infOpen={isEnd}
        title={'時間終了です'}
        msg={'お疲れ様でした。次の画面で画像をアップロードしてください'}
        clickOK={clickOK}
      />
    </>
  );
};

export default Timer;
