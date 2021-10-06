import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExitIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import MediaQuery from 'react-responsive';

import CfmDialog from '../../../Other/Utils/Container/Dialog/cfmDialog';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    exitfabPC: {
      position: 'absolute',
      right: '6rem',
      color: theme.palette.white.main
    },
    exitfabPhone: {
      position: 'absolute',
      right: '2.5rem',
      color: theme.palette.white.main
    }
  })
);

type ExitBtnProps = {
  cfmOpen: boolean;
  setCfmOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  clickOK: () => void;
};

const ExitBtn: React.FC<ExitBtnProps> = (props: ExitBtnProps) => {
  const {
    cfmOpen = false,
    setCfmOpen = () => undefined,
    onClick = () => undefined,
    clickOK = () => undefined
  } = props;
  const styles = useStyle();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <IconButton className={styles.exitfabPC} onClick={onClick} aria-label='exit'>
          <ExitIcon />
        </IconButton>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <IconButton
          className={styles.exitfabPhone}
          onClick={onClick}
          aria-label='exit'
        >
          <ExitIcon />
        </IconButton>
      </MediaQuery>
      {cfmOpen ? (
        <CfmDialog
          cfmOpen={cfmOpen}
          title={'Attention!'}
          msg={'退出します。この操作は取り消せません。よろしいでしょうか？'}
          clickOK={clickOK}
          clickNG={() => setCfmOpen(false)}
        />
      ) : null}
    </>
  );
};

export default ExitBtn;
