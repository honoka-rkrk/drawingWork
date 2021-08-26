import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import TimePicker from '@material-ui/lab/TimePicker';

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
    odai_title: {
      gridRow: '2',
      gridColumn: '2'
    },
    odai_date: {
      gridRow: '2',
      gridColumn: '4'
    },
    button_odai: {
      gridRow: '2',
      gridColumn: '6'
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

type OperationProps = {
  odaiDate: Date;
  handleDeadlineChange: (date: any) => void;
};

const Operation: React.FC<OperationProps> = (props: OperationProps) => {
  const { odaiDate = -1, handleDeadlineChange = () => undefined } = props;
  const styles = useStyle();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Card className={styles.card}>
          <CardHeader title='設定' />
          <CardContent className={styles.cardContent}>
            <TextField
              id='outlined-odai-input'
              label='お題'
              type='text'
              autoComplete='current-password'
              variant='outlined'
              color='primary'
              className={styles.odai_title}
            />
            <KeyboardDatePicker
              disableToolbar
              className={styles.odai_date}
              variant='inline'
              format='yyyy/MM/dd'
              minDate={new Date()}
              margin='normal'
              id='date-picker-inline'
              label='日付'
              value={odaiDate}
              onChange={(date: any) => handleDeadlineChange(date)}
              invalidDateMessage='無効な形式です'
              minDateMessage='昨日以前の日付を指定することはできません'
            />
            <Button
              className={styles.button_odai}
              variant='outlined'
              color='primary'
            >
              設定
            </Button>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label='Basic example'
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <Button
              className={styles.button_startTime}
              variant='outlined'
              color='primary'
            >
              設定
            </Button>
          </CardContent>
        </Card>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default Operation;
