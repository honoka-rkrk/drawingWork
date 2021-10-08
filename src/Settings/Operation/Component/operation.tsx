import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import ExitBtn from '../Container/exitBtn';
import DrawThemeSet from '../Container/drawThemeSet';
import OpenTimeSet from '../Container/openTimeSet';
import TimeLimit from '../Container/timeLimit';

const useStyle = makeStyles(() =>
  createStyles({
    card: {
      gridRow: '2',
      gridColumn: '2'
    },
    cardContent: {
      width: '100%',
      height: '80%',
      display: 'grid',
      gridTemplateColumns: '2% 30% 3% 30% 3% 30% 2%',
      gridTemplateRows: '2% 30% 3% 30% 3% 30% 2%'
    },
    start_time: {
      gridRow: '4',
      gridColumn: '2'
    },
    button_startTime: {
      gridRow: '4',
      gridColumn: '6'
    }
  })
);

const Operation: React.FC = () => {
  const styles = useStyle();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Card className={styles.card}>
          <CardHeader title='設定' />
          <CardContent className={styles.cardContent}>
            <DrawThemeSet />
            <OpenTimeSet />
            <TimeLimit />
          </CardContent>
        </Card>
      </MuiPickersUtilsProvider>
      <ExitBtn />
    </>
  );
};

export default Operation;
