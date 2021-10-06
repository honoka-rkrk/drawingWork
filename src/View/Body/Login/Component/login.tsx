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
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { uiConfig, auth = null } = props;
  const styles = useStyle();

  return (
    <>
      <Card>
        <CardHeader className={styles.title}>ログイン / 新規登録</CardHeader>
        <CardContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <DialogContentText>
            <Typography>{'エントリーするためにはログインが必要です。'}</Typography>
            <Typography>
              {
                'なお、このアプリはユーザーの許可なくTwitterに投稿することはありません。'
              }
            </Typography>
          </DialogContentText>
        </CardContent>
        <CardActions>
          <Button color='primary'>戻る</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
