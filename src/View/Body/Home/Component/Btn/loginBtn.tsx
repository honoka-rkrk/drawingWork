import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginDialog from '../../Container/loginDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '80%',
      height: '100%',
      backgroundColor: theme.palette.green.main,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.green.main
      }
    },
    text: {
      fontSize: '24px',
      fontFamily: 'Josefin Sans'
    }
  })
);

type LoginBtnProps = {
  loginClick: () => void;
  open: boolean;
  onClose: () => void;
  disabled: boolean;
};

const LoginBtn: React.FC<LoginBtnProps> = (props: LoginBtnProps) => {
  const {
    loginClick = () => undefined,
    open = false,
    onClose = () => undefined,
    disabled = false
  } = props;
  const styles = useStyle();
  return (
    <>
      <Button className={styles.button} onClick={loginClick} disabled={disabled}>
        <Typography className={styles.text}>{'LOGIN'}</Typography>
      </Button>
      <LoginDialog open={open} onClose={onClose} />
    </>
  );
};

export default LoginBtn;
