import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    inputPC: {
      gridRow: 2,
      gridColumn: 2
    },
    inputPhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRow: 1,
      gridColumn: 2,
      color: theme.palette.green.main
    },
    buttonBoxPC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRow: 2,
      gridColumn: 3
    },
    buttonBoxPhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRow: 1,
      gridColumn: 4
    },
    fabPhone: {
      backgroundColor: theme.palette.green.main
    },
    button: {
      width: '50%',
      height: '75%',
      display: 'block',
      backgroundColor: `${theme.palette.primary}`
    },
    sendIcon: {
      color: theme.palette.white.main
    }
  })
);

type WritingSpaceProps = {
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  submitError: boolean;
  message: string;
  handleOnSubmit: () => void;
};

const WritingSpace: React.FC<WritingSpaceProps> = (props: WritingSpaceProps) => {
  const styles = useStyle();
  const {
    handleContentChange = () => undefined,
    submitError = false,
    message = '',
    handleOnSubmit = () => undefined
  } = props;
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {submitError ? (
          <TextField
            className={styles.inputPC}
            onChange={handleContentChange}
            margin='dense'
            id='message'
            label='内容'
            fullWidth
            autoFocus
            multiline
            rows={3}
            value={message}
            error
            helperText={'メッセージが入力されていません'}
          />
        ) : (
          <TextField
            className={styles.inputPC}
            onChange={handleContentChange}
            margin='dense'
            id='message'
            label='内容'
            fullWidth
            autoFocus
            multiline
            rows={3}
            value={message}
          />
        )}
        <Box className={styles.buttonBoxPC}>
          <Button
            onClick={handleOnSubmit}
            className={styles.button}
            variant='outlined'
            color='primary'
          >
            {'送信'}
          </Button>
        </Box>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {submitError ? (
          <TextField
            className={styles.inputPhone}
            color='primary'
            onChange={handleContentChange}
            margin='dense'
            id='message'
            label='Message'
            fullWidth
            autoFocus
            variant='outlined'
            multiline
            rows={3}
            value={message}
            error
            helperText={'メッセージが入力されていません'}
          />
        ) : (
          <TextField
            className={styles.inputPhone}
            onChange={handleContentChange}
            margin='dense'
            color='primary'
            id='message'
            label='Message'
            variant='outlined'
            fullWidth
            autoFocus
            multiline
            rows={3}
            value={message}
          />
        )}
        <Box className={styles.buttonBoxPhone}>
          <Fab className={styles.fabPhone}>
            <SendIcon onClick={handleOnSubmit} className={styles.sendIcon} />
          </Fab>
        </Box>
      </MediaQuery>
    </>
  );
};

export default WritingSpace;
