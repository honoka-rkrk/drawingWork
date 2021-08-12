import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles(() =>
  createStyles({
    clockStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      gridColumn: 3,
      gridRow: 1
    },
    clockStyleDanger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      color: '#ff1744',
      gridColumn: 3,
      gridRow: 1
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
