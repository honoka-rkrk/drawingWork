import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

import ExitBtn from '../Container/exitBtn';
import DrawThemeSet from '../Container/drawThemeSet';
import OpenTimeSet from '../Container/openTimeSet';
import TimeLimit from '../Container/timeLimit';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      gridRow: '2',
      gridColumn: '2'
    },
    cardPhoneTheme: {
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '30px',
      borderRadius: '40px',
      backgroundColor: theme.palette.yellow.main
    },
    cardPhoneOpenHour: {
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '30px',
      borderRadius: '40px',
      backgroundColor: theme.palette.green.second
    },
    cardPhoneTimeLimit: {
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '30px',
      marginBottom: '30px',
      borderRadius: '40px',
      backgroundColor: theme.palette.red.main
    },
    headerPhone: {
      padding: '1px',
      marginTop: '10px'
    },
    title: {
      fontFamily: 'Kosugi Maru',
      color: theme.palette.white.second,
      textAlign: 'center'
    },
    cardContent: {
      width: '100%',
      height: '80%',
      display: 'grid',
      gridTemplateColumns: '2% 30% 3% 30% 3% 30% 2%',
      gridTemplateRows: '2% 30% 3% 30% 3% 30% 2%'
    },
    cardContentPhone: {
      display: 'flex',
      flexFlow: 'column',
      padding: '20px'
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
      <MediaQuery query='(min-width:767px)'>
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
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Card className={styles.cardPhoneTheme}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.title}>お題</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <DrawThemeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPhoneOpenHour}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.title}>開始時刻</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <OpenTimeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPhoneTimeLimit}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.title}>制限時間</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <TimeLimit />
            </CardContent>
          </Card>
        </MuiPickersUtilsProvider>
        <ExitBtn />
      </MediaQuery>
    </>
  );
};

export default Operation;
