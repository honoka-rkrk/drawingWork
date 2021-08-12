import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles(() =>
  createStyles({
    homefab: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      '&:hover': {
        backgroundColor: '#6666ff'
      }
    }
  })
);

type MoveHomeProps = {
  onClick: () => void;
};

const MoveHome: React.FC<MoveHomeProps> = (props: MoveHomeProps) => {
  const { onClick = () => undefined } = props;
  const styles = useStyle();
  return (
    <>
      <Fab
        className={styles.homefab}
        onClick={onClick}
        color='primary'
        aria-label='exit'
      >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default MoveHome;
