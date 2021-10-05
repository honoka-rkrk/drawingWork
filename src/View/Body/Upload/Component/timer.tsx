import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import InfDialog from '../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    clockStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      color: theme.palette.darkGreen.main,
      fontSize: '1em'
    },
    clockStyleDanger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1em',
      borderRadius: '25px',
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
      {danger ? (
        <Paper className={styles.clockStyleDanger}>
          {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
        </Paper>
      ) : (
        <Paper className={styles.clockStyle}>
          {tmMinutes && tmSeconds ? tmMinutes + '分' + tmSeconds + '秒' : null}
        </Paper>
      )}
      {isEnd ? (
        <InfDialog
          infOpen={isEnd}
          title={'アップロード時間の終了です'}
          msg={'お疲れ様でした。またの参加をお待ちしております。'}
          clickOK={clickOK}
        />
      ) : null}
    </>
  );
};

export default Timer;
