import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '50% 50%'
    },
    openTime_setDatePhone: {
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '50% 50%',
      marginBottom: '10px'
    },
    openTime_selectHour: {
      gridRow: '1',
      gridColumn: '1',
      marginRight: '15px'
    },
    openTime_selectHourPhone: {
      gridRow: '1',
      gridColumn: '1',
      marginRight: '15px'
    },
    openTime_selectMinutes: {
      gridRow: '1',
      gridColumn: '2',
      marginRight: '15px',
      marginBottom: '80px'
    },
    openTime_selectMinutesPhone: {
      gridRow: '1',
      gridColumn: '2',
      marginLeft: '15px'
    },
    openTime_button: {
      gridRow: '6',
      gridColumn: '6'
    },
    button: {
      marginLeft: '190px',
      width: '20%',
      backgroundColor: theme.palette.yellow.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.yellow.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.yellow.disabled
      }
    },
    text: {
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    }
  })
);

type TimeLimitProps = {
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

const TimeLimit: React.FC<TimeLimitProps> = (props: TimeLimitProps) => {
  const {
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
          <Box className={styles.openTime_selectMinutes}>
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
        <Button className={styles.button} onClick={handleOnSubmit}>
          <Typography className={styles.text}> 設定</Typography>
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
        <Button className={styles.button} onClick={handleOnSubmit}>
          <Typography className={styles.text}> 設定</Typography>
        </Button>
      </MediaQuery>
    </>
  );
};

export default TimeLimit;
