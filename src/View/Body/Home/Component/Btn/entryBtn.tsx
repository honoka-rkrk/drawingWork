import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '50%',
      height: '30%',
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
      borderRadius: '12px',
      '&:hover': {
        backgroundColor: '#D4F5E9'
      },
      '&:disabled': {
        backgroundColor: '#D4F5E9'
      }
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
          variant='outlined'
          color='primary'
          disabled={false}
          // disabled={open && !isMax ? false : true}
        >
          {'エントリー'}
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
