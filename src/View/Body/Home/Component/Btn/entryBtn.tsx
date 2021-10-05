import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '80%',
      height: '100%',
      backgroundColor: theme.palette.green.main,
      borderRadius: '4px',
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.green.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.green.disabled,
        color: theme.palette.green.main
      }
    },
    text: {
      fontSize: '24px',
      fontFamily: 'Josefin Sans'
    }
  })
);

type EntryBtnProps = {
  infOpen: boolean;
  setInfOpen: React.Dispatch<React.SetStateAction<boolean>>;
  entryClick: () => void;
  isMax: boolean;
  disabled: boolean;
  open: boolean;
};

const EntryBtn: React.FC<EntryBtnProps> = (props: EntryBtnProps) => {
  const {
    infOpen = false,
    setInfOpen = () => undefined,
    entryClick = () => undefined,
    isMax = false,
    disabled = true,
    open = false
  } = props;
  const styles = useStyle();

  return (
    <>
      {disabled ? null : (
        <Button
          className={styles.button}
          onClick={entryClick}
          disabled={false}
          // disabled={open && !isMax ? false : true}
        >
          <Typography className={styles.text}>{'ENTRY'}</Typography>
        </Button>
      )}
      {infOpen ? (
        <InfDialog
          infOpen={infOpen}
          title={'上限人数に達しました'}
          msg={'次回の開催までお待ちください'}
          clickOK={() => setInfOpen(false)}
        />
      ) : null}
    </>
  );
};

export default EntryBtn;
