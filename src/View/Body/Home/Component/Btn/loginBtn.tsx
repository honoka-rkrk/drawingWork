import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginDialog from '../../Container/loginDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '50%',
      height: '30%',
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
      borderRadius: '12px',
      '&:hover': {
        backgroundColor: '#D4F5E9'
      },
      '&:disabled': {
        backgroundColor: '#D4F5E9'
      }
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
        {disabled ? 'ログイン済' : 'ログイン'}
      </Button>
      <LoginDialog open={open} onClose={onClose} />
    </>
  );
};

export default LoginBtn;
