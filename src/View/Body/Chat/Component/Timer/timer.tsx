import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    clockStyle: {
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
    clockStyleDanger: {
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
      {danger ? (
        <Paper className={styles.clockStyleDanger}>
          {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
        </Paper>
      ) : (
        <Paper className={styles.clockStyle}>
          {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
        </Paper>
      )}
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
