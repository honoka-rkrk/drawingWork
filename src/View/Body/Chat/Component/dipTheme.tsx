import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    dispTheme: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      fontSize: '1em',
      gridColumn: 1,
      gridRow: 1
    },
    text: {
      color: theme.palette.darkGreen.main,
      fontFamily: 'Mplus'
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
    <Paper className={styles.dispTheme}>
      <Typography className={styles.text}>{drawTheme}</Typography>
    </Paper>
  );
};

export default DispTheme;
