import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: 'Kosugi Maru'
    },
    okButton: {
      color: theme.palette.red.main
    },
    ngButton: {
      color: theme.palette.green.main
    }
  })
);

type InfDialogProps = {
  infOpen: boolean;
  title: string;
  msgElm: React.ReactNode;
  clickOK: () => void;
  txtOK?: string;
};

const InfDialog: React.FC<InfDialogProps> = (props: InfDialogProps) => {
  const styles = useStyle();
  const {
    infOpen = false,
    title = '',
    msgElm = <></>,
    clickOK = () => undefined,
    txtOK = '了 解'
  } = props;

  return (
    <Dialog open={infOpen}>
      <DialogTitle>
        {<Typography className={styles.text}>{title}</Typography>}
      </DialogTitle>
      <DialogContent>
        {<Typography className={styles.text}>{msgElm}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={clickOK} color='primary' autoFocus>
          <Typography className={styles.text}>{txtOK}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfDialog;
