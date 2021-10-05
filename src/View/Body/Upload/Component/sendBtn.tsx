import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    sendBtnPhone: {
      gridRow: 1,
      gridColumn: 4,
      borderRadius: '4px',
      backgroundColor: theme.palette.green.main,
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.green.main
      }
    },
    textBtnPhone: {
      fontSize: '24px',
      fontFamily: 'Josefin Sans'
    }
  })
);

type SendBtnProps = {
  myFiles: File[];
  clickable: boolean;
  handleUpload: (accepterdImg: any) => Promise<void>;
};

const SendBtn: React.FC<SendBtnProps> = (props: SendBtnProps) => {
  const styles = useStyle();
  const { myFiles = [], clickable = false, handleUpload = () => undefined } = props;
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Button
          className={styles.sendBtnPhone}
          disabled={!clickable}
          type='submit'
          variant='contained'
          fullWidth
          style={{ marginTop: '5px' }}
          onClick={() => handleUpload(myFiles)}
        >
          <Typography className={styles.textBtnPhone}>UPLOAD</Typography>
        </Button>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Button
          className={styles.sendBtnPhone}
          disabled={!clickable}
          type='submit'
          variant='contained'
          fullWidth
          style={{ marginTop: '5px' }}
          onClick={() => handleUpload(myFiles)}
        >
          <Typography className={styles.textBtnPhone}>UPLOAD</Typography>
        </Button>
      </MediaQuery>
    </>
  );
};

export default SendBtn;
