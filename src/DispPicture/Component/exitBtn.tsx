import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExitIcon from '@material-ui/icons/ExitToApp';

import CfmDialog from '../../Utils/Container/Dialog/cfmDialog';

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
      <Fab
        className={styles.exitfab}
        onClick={onClick}
        color='primary'
        aria-label='exit'
      >
        <ExitIcon />
      </Fab>
      {cfmOpen ? (
        <CfmDialog
          cfmOpen={cfmOpen}
          title={'Attention!'}
          msg={
            'アプリから退出します。この操作は取り消せません。よろしいでしょうか？'
          }
          clickOK={clickOK}
          clickNG={() => setCfmOpen(false)}
        />
      ) : null}
    </>
  );
};

export default ExitBtn;
