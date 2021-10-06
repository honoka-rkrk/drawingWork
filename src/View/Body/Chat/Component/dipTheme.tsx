import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    dispThemePC: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '40px'
    },
    dispThemePhone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      gridColumn: 1,
      gridRow: 1
    },
    textPC: {
      color: theme.palette.darkGreen.main,
      fontFamily: 'Kosugi Maru',
      fontSize: '24px'
    },
    textPhone: {
      color: theme.palette.darkGreen.main,
      fontFamily: 'Kosugi Maru',
      fontSize: '1em'
    }
  })
);

type DispThemeProps = {
  drawTheme: string;
};

const DispTheme: React.FC<DispThemeProps> = (props: DispThemeProps) => {
  const { drawTheme = '' } = props;
  const styles = useStyle();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Paper className={styles.dispThemePC}>
          <Typography className={styles.textPC}>{drawTheme}</Typography>
        </Paper>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Paper className={styles.dispThemePhone}>
          <Typography className={styles.textPhone}>{drawTheme}</Typography>
        </Paper>
      </MediaQuery>
    </>
  );
};

export default DispTheme;
