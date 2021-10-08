import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
  const styles = useStyle();
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
      <DialogTitle className={styles.text}>
        {<Typography className={styles.text}>{title}</Typography>}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {<Typography className={styles.text}>{msgElm}</Typography>}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clickOK} autoFocus className={styles.okButton}>
          <Typography className={styles.text}>{txtOK}</Typography>
        </Button>
        <Button onClick={clickNG} autoFocus className={styles.ngButton}>
          <Typography className={styles.text}>{txtNG}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CfmDialog;
