import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      gridRow: '2',
      gridColumn: '2',
      width: '50%',
      height: '50%'
    },
    cardContent: {
      width: '100%',
      height: '100px',
      margin: '1em 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      width: '100%',
      height: '100%',
      margin: '1em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
        <CardHeader title='ログイン' />
        <CardContent className={styles.cardContent}>
          <TextField
            id='outlined-password-input'
            onChange={handleContentChange}
            value={password}
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
            color='primary'
          />
        </CardContent>
        <CardActions>
          <Button
            className={styles.button}
            onClick={loginClick}
            variant='outlined'
            color='primary'
          >
            ログイン
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
