import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    exitfab: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      backgroundColor: theme.palette.orange.main,
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.orange.disabled
      }
    }
  })
);

type ExitBtnProps = {
  onClick: () => void;
};

const ExitBtn: React.FC<ExitBtnProps> = (props: ExitBtnProps) => {
  const { onClick = () => undefined } = props;
  const styles = useStyle();
  return (
    <>
      <Fab
        className={styles.exitfab}
        onClick={onClick}
        color='primary'
        aria-label='exit'
      >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default ExitBtn;
