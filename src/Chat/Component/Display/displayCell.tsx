import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

import { Message } from '../../../Model/message';

const useStyle = makeStyles(() =>
  createStyles({
    tableRow: {
      height: 'calc(((100vh - 180px) * 0.95) / 28'
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
          <TableCell align='left'>
            {message.photoUrl && message ? (
              <Avatar src={message.photoUrl} />
            ) : (
              <Avatar>N</Avatar>
            )}
          </TableCell>
          <TableCell align='left'>{message.messages}</TableCell>
        </TableRow>
      ) : null}
    </>
  );
};

export default DisplayCell;
