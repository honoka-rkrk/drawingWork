import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(() =>
  createStyles({
    dispTheme: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      gridColumn: 1,
      gridRow: 1
    }
  })
);

type DispThemeProps = {
  drawTheme: string;
};

const DispTheme: React.FC<DispThemeProps> = (props: DispThemeProps) => {
  const { drawTheme = '' } = props;
  const styles = useStyle();

  return <Paper className={styles.dispTheme}>{drawTheme}</Paper>;
};

export default DispTheme;
