import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ExitBtn from '../Container/exitBtn';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      gridRow: '2',
      gridColumn: '2',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: theme.palette.settings.second
    },
    cardContent: {
      width: '100%',
      height: '100px'
    },
    text: {
      color: theme.palette.white.main,
      fontFamily: 'Kosugi Maru'
    },
    button: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.red.second,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.red.disabled
      },
      '&:disabled': {
        backgroundColor: theme.palette.red.disabled,
        color: theme.palette.white.main
      }
    }
  })
);

type LoginProps = {
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  password: string;
  loginClick: () => void;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const {
    handleContentChange = () => undefined,
    password = '',
    loginClick = () => undefined
  } = props;
  const styles = useStyles();
  return (
    <>
      <Card className={styles.card}>
        <CardHeader
          title={<Typography className={styles.text}>ログイン</Typography>}
        />
        <CardContent className={styles.cardContent}>
          <TextField
            id='outlined-password-input'
            onChange={handleContentChange}
            value={password}
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
            color='secondary'
          />
        </CardContent>
        <CardActions>
          <Button className={styles.button} onClick={loginClick}>
            <Typography className={styles.text}> ログイン</Typography>
          </Button>
        </CardActions>
      </Card>
      <ExitBtn />
    </>
  );
};

export default Login;
