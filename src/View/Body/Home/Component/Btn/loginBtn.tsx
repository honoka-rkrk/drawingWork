import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    buttonPC: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.white.main,
      borderRadius: '4px',
      color: theme.palette.green.main,
      '&:hover': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.white.main
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.white.main
      }
    },
    buttonPhone: {
      width: '80%',
      height: '100%',
      backgroundColor: theme.palette.green.main,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.second,
        color: theme.palette.white.main
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.white.main
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
  disabled: boolean;
};

const LoginBtn: React.FC<LoginBtnProps> = (props: LoginBtnProps) => {
  const { loginClick = () => undefined, disabled = false } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Button className={styles.buttonPC} onClick={loginClick} disabled={disabled}>
          <Typography className={styles.text}>{'LOGIN'}</Typography>
        </Button>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Button
          className={styles.buttonPhone}
          onClick={loginClick}
          disabled={disabled}
        >
          <Typography className={styles.text}>{'LOGIN'}</Typography>
        </Button>
      </MediaQuery>
    </>
  );
};

export default LoginBtn;
