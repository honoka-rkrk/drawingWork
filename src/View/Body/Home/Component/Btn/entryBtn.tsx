import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InfDialog from '../../../../../Other/Utils/Container/Dialog/infDialog';

const useStyle = makeStyles(() =>
  createStyles({
    button: {
      width: '70%',
      height: '75%'
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
