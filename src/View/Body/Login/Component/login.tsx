import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      gridRow: 2,
      gridColumn: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Kosugi Maru'
    },
    button: {
      backgroundColor: theme.palette.red.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru',
      '&:hover': {
        backgroundColor: theme.palette.red.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.red.disabled
      }
    }
  })
);

type LoginProps = {
  uiConfig: firebaseui.auth.Config;
  auth: firebase.auth.Auth | null;
  backClick: () => void;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { uiConfig, auth = null, backClick } = props;
  const styles = useStyle();

  return (
    <>
      <Card className={styles.card}>
        <CardHeader
          title={
            <Typography className={styles.title}>ログイン / 新規登録</Typography>
          }
        />
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
          <Button className={styles.button} onClick={backClick}>
            戻る
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
