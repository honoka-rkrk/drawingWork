import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

type CfmDialogProps = {
  cfmOpen: boolean;
  title: string;
  msgElm: React.ReactNode;
  clickOK: () => void;
  clickNG: () => void;
  txtOK?: string;
  txtNG?: string;
};

const CfmDialog: React.FC<CfmDialogProps> = (props: CfmDialogProps) => {
  const {
    cfmOpen = false,
    title = '',
    msgElm = <></>,
    clickOK = () => undefined,
    clickNG = () => undefined,
    txtOK = '了 解',
    txtNG = '取 消'
  } = props;

  return (
    <Dialog open={cfmOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{msgElm}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clickOK} color='primary' autoFocus>
          {txtOK}
        </Button>
        <Button onClick={clickNG} color='primary' autoFocus>
          {txtNG}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CfmDialog;
