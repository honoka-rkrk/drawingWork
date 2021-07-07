import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      gridRow: 2,
      gridColumn: 2
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRow: 2,
      gridColumn: 3
    },
    button: {
      width: '50%',
      height: '75%',
      display: 'block',
      backgroundColor: `${theme.palette.primary}`
    }
  })
);

type WritingSpaceProps = {
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  submitError: boolean;
  message: string;
};

const WritingSpace: React.FC<WritingSpaceProps> = (props: WritingSpaceProps) => {
  const styles = useStyle();
  const {
    handleContentChange = () => undefined,
    submitError = false,
    message = ''
  } = props;
  return (
    <>
      {submitError ? (
        <TextField
          className={styles.input}
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
          className={styles.input}
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
      <Box className={styles.buttonBox}>
        <Button className={styles.button} variant='outlined' color='primary'>
          {'送信'}
        </Button>
      </Box>
    </>
  );
};

export default WritingSpace;
