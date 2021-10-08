import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
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
    },
    button: {
      marginLeft: '190px',
      width: '20%',
      backgroundColor: theme.palette.green.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled
      }
    },
    text: {
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
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
      <MediaQuery query='(min-width:767px)'>
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
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {submitError ? (
          <TextField
            id='outlined-odai-input'
            label='お題'
            type='text'
            autoComplete='current-password'
            variant='outlined'
            color='secondary'
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
            color='secondary'
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
          color='secondary'
          value={odaiDate}
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

export default DrawThemeSet;
