import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';

import InfDialog from '../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    clockStylePC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '40px',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      padding: '1em',
      fontFamily: 'Kosugi Maru',
      color: theme.palette.darkGreen.main
    },
    clockStylePhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '25px',
      width: '100%',
      height: '100%',
      padding: '1em',
      fontSize: '1em',
      fontFamily: 'Kosugi Maru',
      color: theme.palette.darkGreen.main
    },
    clockStyleDangerPC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '40px',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      padding: '1em',
      fontFamily: 'Kosugi Maru',
      color: theme.palette.red.main
    },
    clockStyleDangerPhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '25px',
      width: '100%',
      height: '100%',
      fontSize: '1em',
      padding: '1em',
      color: theme.palette.red.main
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
      {isEnd ? (
        <InfDialog
          infOpen={isEnd}
          title={'閲覧時間の終了です'}
          msg={
            '長い時間お疲れさまでした。またの参加をお待ちしてます！ 今回のイラストはTOP画面に表示されます。'
          }
          clickOK={clickOK}
        />
      ) : null}
    </>
  );
};

export default Timer;
