import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyle = makeStyles(() =>
  createStyles({
    openTime_setDate: {
      gridRow: '6',
      gridColumn: '2',
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '50% 50%'
    },
    openTime_selectHour: {
      gridRow: '1',
      gridColumn: '1'
    },
    openTime_selectMinutes: {
      gridRow: '1',
      gridColumn: '2'
    },
    openTime_button: {
      gridRow: '6',
      gridColumn: '6'
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
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Button
        className={styles.openTime_button}
        variant='outlined'
        color='primary'
        onClick={handleOnSubmit}
      >
        設定
      </Button>
    </>
  );
};

export default TimeLimit;
