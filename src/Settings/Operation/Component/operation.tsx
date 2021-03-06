import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

import ExitBtn from '../Container/exitBtn';
import DrawThemeSet from '../Container/drawThemeSet';
import OpenTimeSet from '../Container/openTimeSet';
import TimeLimit from '../Container/timeLimit';
import PeopleLimit from '../Container/peopleLimit';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    cardPCTheme: {
      backgroundColor: theme.palette.yellow.main,
      height: '80%',
      width: '312px',
      margin: 'auto',
      borderRadius: '40px'
    },
    cardPhoneTheme: {
      width: '90%',
      margin: 'auto',
      borderRadius: '40px',
      backgroundColor: theme.palette.yellow.main
    },
    cardPCOpenHour: {
      backgroundColor: theme.palette.green.second,
      height: '80%',
      width: '312px',
      margin: 'auto',
      borderRadius: '40px'
    },
    cardPhoneOpenHour: {
      width: '90%',
      margin: 'auto',
      borderRadius: '40px',
      backgroundColor: theme.palette.green.second
    },
    cardPCTimeLimit: {
      backgroundColor: theme.palette.red.main,
      height: '80%',
      width: '312px',
      margin: 'auto',
      borderRadius: '40px'
    },
    cardPhoneTimeLimit: {
      width: '90%',
      margin: 'auto',
      borderRadius: '40px',
      backgroundColor: theme.palette.red.main
    },
    cardPCPeopleLimit: {
      backgroundColor: theme.palette.yellow.main,
      height: '80%',
      width: '312px',
      margin: 'auto',
      borderRadius: '40px'
    },
    cardPhonePeopleLimit: {
      width: '90%',
      margin: 'auto',
      borderRadius: '40px',
      backgroundColor: theme.palette.yellow.main
    },
    headerPC: {
      padding: '1px',
      marginTop: '10px'
    },
    headerPhone: {
      padding: '1px',
      marginTop: '10px'
    },
    titlePC: {
      fontFamily: 'Kosugi Maru',
      color: theme.palette.white.second,
      textAlign: 'center',
      fontSize: '20px'
    },
    titlePhone: {
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
    cardContentPC: {
      display: 'flex',
      flexFlow: 'column',
      padding: '20px'
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
          <Card className={styles.cardPCTheme}>
            <CardHeader
              className={styles.headerPC}
              title={<Typography className={styles.titlePC}>??????</Typography>}
            />
            <CardContent className={styles.cardContentPC}>
              <DrawThemeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPCOpenHour}>
            <CardHeader
              className={styles.headerPC}
              title={<Typography className={styles.titlePC}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPC}>
              <OpenTimeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPCTimeLimit}>
            <CardHeader
              className={styles.headerPC}
              title={<Typography className={styles.titlePC}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPC}>
              <TimeLimit />
            </CardContent>
          </Card>
          <Card className={styles.cardPCPeopleLimit}>
            <CardHeader
              className={styles.headerPC}
              title={<Typography className={styles.titlePC}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPC}>
              <PeopleLimit />
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
              title={<Typography className={styles.titlePhone}>??????</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <DrawThemeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPhoneOpenHour}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.titlePhone}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <OpenTimeSet />
            </CardContent>
          </Card>
          <Card className={styles.cardPhoneTimeLimit}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.titlePhone}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <TimeLimit />
            </CardContent>
          </Card>
          <Card className={styles.cardPhonePeopleLimit}>
            <CardHeader
              className={styles.headerPhone}
              title={<Typography className={styles.titlePhone}>????????????</Typography>}
            />
            <CardContent className={styles.cardContentPhone}>
              <PeopleLimit />
            </CardContent>
          </Card>
        </MuiPickersUtilsProvider>
        <ExitBtn />
      </MediaQuery>
    </>
  );
};

export default Operation;
