import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

type InfDialogProps = {
  infOpen: boolean;
  title: string;
  msgElm: React.ReactNode;
  clickOK: () => void;
  txtOK?: string;
};

const InfDialog: React.FC<InfDialogProps> = (props: InfDialogProps) => {
  const {
    infOpen = false,
    title = '',
    msgElm = <></>,
    clickOK = () => undefined,
    txtOK = '了 解'
  } = props;

  return (
    <Dialog open={infOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{msgElm}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clickOK} color='primary' autoFocus>
          {txtOK}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfDialog;
