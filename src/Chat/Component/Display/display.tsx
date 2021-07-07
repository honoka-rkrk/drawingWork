import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MessageTypes } from '../../Container/data';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import MsgHeader from '../../Container/Display/msgHeader';
const useStyle = makeStyles(() =>
  createStyles({
    tableContainer: {
      maxHeight: '100%',
      gridRow: 4,
      gridColumn: 2
    },
    table: {},
    tableBody: {
      textAlign: 'right'
    },
    tableRow: {
      height: 'calc(((100vh - 180px) * 0.95) / 28'
    }
  })
);

type DisplayProps = { messages: MessageTypes[] | null };

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const styles = useStyle();
  const { messages = null } = props;

  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} stickyHeader>
          <MsgHeader />
          <TableBody className={styles.tableBody}>
            {messages
              ? [...Array(messages.length)].map((_, index) => (
                  <TableRow key={`msg_${index}`} className={styles.tableRow}>
                    <TableCell align='left'>{messages[index].messages}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Display;
