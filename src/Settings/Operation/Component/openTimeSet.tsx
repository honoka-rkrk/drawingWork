import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    openTime_setDate: {
      gridRow: '4',
      gridColumn: '2',
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '50% 50%'
    },
    openTime_setDatePhone: {
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '50% 50%'
    },
    openTime_selectHour: {
      gridRow: '1',
      gridColumn: '1'
    },
    openTime_selectHourPhone: {
      gridRow: '1',
      gridColumn: '1',
      marginRight: '15px'
    },
    openTime_selectMinutes: {
      gridRow: '1',
      gridColumn: '2'
    },
    openTime_selectMinutesPhone: {
      gridRow: '1',
      gridColumn: '2',
      marginLeft: '15px'
    },
    openTime_date: {
      gridRow: '4',
      gridColumn: '4'
    },
    openTime_button: {
      gridRow: '4',
      gridColumn: '6'
    },
    button: {
      marginLeft: '190px',
      width: '20%',
      backgroundColor: theme.palette.red.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.red.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.red.disabled
      }
    },
    text: {
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    }
  })
);

type OpenTimeSetProps = {
  openTimeDate: Date;
  handleDateChange: (date: any) => void;
  hour: string;
  minutes: string;
  handleHourChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
  handleMinutesChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
  hourItem: Array<string>;
  minutesItem: Array<string>;
  submitError: boolean;
  handleOnSubmit: () => void;
};

const OpenTimeSet: React.FC<OpenTimeSetProps> = (props: OpenTimeSetProps) => {
  const {
    openTimeDate = -1,
    handleDateChange = () => undefined,
    hour = '',
    minutes = '',
    handleHourChange = () => undefined,
    handleMinutesChange = () => undefined,
    hourItem = [],
    minutesItem = [],
    submitError = false,
    handleOnSubmit = () => undefined
  } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.openTime_setDate}>
          <Box className={styles.openTime_selectHour}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>時間</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={hour}
                label='Age'
                onChange={handleHourChange}
              >
                {hourItem.map((item, index) => {
                  return (
                    <MenuItem value={index} key={`hourItem_${index}`}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.openTime_selectMinutes}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>分</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={minutes}
                label='Age'
                onChange={handleMinutesChange}
              >
                {minutesItem.map((item, index) => {
                  return (
                    <MenuItem value={index} key={`minutesItem_${index}`}>
                      <Typography className={styles.text}>{item}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <KeyboardDatePicker
          disableToolbar
          className={styles.openTime_date}
          variant='inline'
          format='yyyy/MM/dd'
          minDate={new Date()}
          margin='normal'
          id='date-picker-inline'
          label='日付'
          value={openTimeDate}
          onChange={(date: any) => handleDateChange(date)}
          invalidDateMessage='無効な形式です'
          minDateMessage='昨日以前の日付を指定することはできません'
        />
        <Button
          className={styles.openTime_button}
          variant='outlined'
          color='primary'
          onClick={handleOnSubmit}
        >
          設定
        </Button>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.openTime_setDatePhone}>
          <Box className={styles.openTime_selectHourPhone}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label' color='secondary'>
                時間
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={hour}
                label='Age'
                onChange={handleHourChange}
                color='secondary'
              >
                {hourItem.map((item, index) => {
                  return (
                    <MenuItem value={index} key={`hourItem_${index}`}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.openTime_selectMinutesPhone}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label' color='secondary'>
                分
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={minutes}
                label='Age'
                onChange={handleMinutesChange}
                color='secondary'
              >
                {minutesItem.map((item, index) => {
                  return (
                    <MenuItem value={index} key={`minutesItem_${index}`}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <KeyboardDatePicker
          disableToolbar
          className={styles.openTime_date}
          variant='inline'
          format='yyyy/MM/dd'
          minDate={new Date()}
          margin='normal'
          id='date-picker-inline'
          label='日付'
          color='secondary'
          value={openTimeDate}
          onChange={(date: any) => handleDateChange(date)}
          invalidDateMessage='無効な形式です'
          minDateMessage='昨日以前の日付を指定することはできません'
        />
        <Button className={styles.button} onClick={handleOnSubmit}>
          <Typography className={styles.text}> 設定</Typography>
        </Button>
      </MediaQuery>
    </>
  );
};

export default OpenTimeSet;
