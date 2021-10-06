import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Message } from '../../../../../Other/Model/message';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    tableRow: {
      height: 'calc(((100vh - 180px) * 0.95) / 28'
    },
    nameColor: {
      color: '#000055'
    },
    textStyle: {
      fontFamily: 'Mplus'
    }
  })
);

type DisplayCellProps = {
  message: Message | null;
};

const DisplayCell: React.FC<DisplayCellProps> = (props: DisplayCellProps) => {
  const { message = null } = props;
  const styles = useStyle();
  return (
    <>
      {message ? (
        <TableRow className={styles.tableRow}>
          <TableCell align='left' width={'100px'}>
            {message.photoUrl && message ? (
              <Avatar src={message.photoUrl} />
            ) : (
              <Avatar>N</Avatar>
            )}
          </TableCell>
          <TableCell align='left'>
            <Typography
              color='textSecondary'
              variant='caption'
              className={styles.textStyle}
            >
              {message.displayName}
            </Typography>
            <Typography className={styles.textStyle}>{message.message}</Typography>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
};

export default DisplayCell;
