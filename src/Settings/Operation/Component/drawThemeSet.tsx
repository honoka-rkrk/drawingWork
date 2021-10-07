import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
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
    }
  })
);

type DrawThemeSetProps = {
  odaiDate: Date;
  handleDateChange: (date: any) => void;
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  submitError: boolean;
  drawTheme: string;
  handleOnSubmit: () => void;
};

const DrawThemeSet: React.FC<DrawThemeSetProps> = (props: DrawThemeSetProps) => {
  const {
    odaiDate = -1,
    handleDateChange = () => undefined,
    handleContentChange = () => undefined,
    submitError = false,
    drawTheme = '',
    handleOnSubmit = () => undefined
  } = props;
  const styles = useStyle();
  return (
    <>
      {submitError ? (
        <TextField
          id='outlined-odai-input'
          label='お題'
          type='text'
          autoComplete='current-password'
          variant='outlined'
          color='primary'
          className={styles.odai_title}
          onChange={handleContentChange}
          value={drawTheme}
          error
          helperText={'メッセージが入力されていません'}
        />
      ) : (
        <TextField
          id='outlined-odai-input'
          label='お題'
          type='text'
          autoComplete='current-password'
          variant='outlined'
          color='primary'
          className={styles.odai_title}
          onChange={handleContentChange}
          value={drawTheme}
        />
      )}
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
        onChange={(date: any) => handleDateChange(date)}
        invalidDateMessage='無効な形式です'
        minDateMessage='昨日以前の日付を指定することはできません'
      />
      <Button
        className={styles.button_odai}
        variant='outlined'
        color='primary'
        onClick={handleOnSubmit}
      >
        設定
      </Button>
    </>
  );
};

export default DrawThemeSet;
