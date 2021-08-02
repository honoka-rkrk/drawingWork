import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import InfDialog from '../../Utils/Container/Dialog/infDialog';

const useStyle = makeStyles(() =>
  createStyles({
    clockStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      padding: '1em'
    },
    clockStyleDanger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      padding: '1em',
      color: '#ff1744'
    },
    exitfab: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      '&:hover': {
        backgroundColor: '#6666ff'
      }
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
