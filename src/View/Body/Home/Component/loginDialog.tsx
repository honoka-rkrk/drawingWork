import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyle = makeStyles(() =>
  createStyles({
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);

type LoginProps = {
  uiConfig: firebaseui.auth.Config;
  auth: firebase.auth.Auth | null;
  open: boolean;
  onClose: () => void;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { uiConfig, auth = null, open = false, onClose = () => undefined } = props;
  const styles = useStyle();

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle className={styles.title}>ログイン / 新規登録</DialogTitle>
        <DialogContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <DialogContentText>
            <Typography>{'エントリーするためにはログインが必要です。'}</Typography>
            <Typography>
              {
                'なお、このアプリはユーザーの許可なくTwitterに投稿することはありません。'
              }
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            戻る
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
