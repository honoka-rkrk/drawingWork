import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    homefab: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      color: theme.palette.orange.main,
      '&:hover': {
        backgroundColor: theme.palette.orange.disabled
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
      <Fab className={styles.homefab} onClick={onClick} aria-label='exit'>
        <HomeIcon />
      </Fab>
    </>
  );
};

export default MoveHome;
