import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(() =>
  createStyles({
    card: {
      gridRow: '2',
      gridColumn: '2'
    },
    cardContent: {
      width: '100%',
      height: '80%',
      display: 'grid',
      gridTemplateColumns: '2% 30% 3% 30% 3% 30% 2%',
      gridTemplateRows: '2% 30% 3% 30% 3% 30% 2%'
    },
    odai_title: {
      gridRow: '2',
      gridColumn: '2'
    },
    odai_date: {
      gridRow: '2',
      gridColumn: '4'
    },
    button_odai: {
      gridRow: '2',
      gridColumn: '6'
    },
    start_time: {
      gridRow: '4',
      gridColumn: '2'
    },
    button_startTime: {
      gridRow: '4',
      gridColumn: '6'
    }
  })
);

const Operation: React.FC = () => {
  const styles = useStyle();

  return (
    <>
      <Card className={styles.card}>
        <CardHeader title='設定' />
        <CardContent className={styles.cardContent}>
          <TextField
            id='outlined-odai-input'
            label='お題'
            type='text'
            autoComplete='current-password'
            variant='outlined'
            color='primary'
            className={styles.odai_title}
          />
          <TextField
            id='outlined-odai-input'
            label='日付'
            type='text'
            autoComplete='current-password'
            variant='outlined'
            color='primary'
            className={styles.odai_date}
          />
          <Button className={styles.button_odai} variant='outlined' color='primary'>
            設定
          </Button>
          <TextField
            id='outlined-odai-input'
            label='お題'
            type='text'
            autoComplete='current-password'
            variant='outlined'
            color='primary'
            className={styles.start_time}
          />
          <Button
            className={styles.button_startTime}
            variant='outlined'
            color='primary'
          >
            設定
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Operation;
