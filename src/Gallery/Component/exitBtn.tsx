import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles(() =>
  createStyles({
    exitfab: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      '&:hover': {
        backgroundColor: '#6666ff'
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
