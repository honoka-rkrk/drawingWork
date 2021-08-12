import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

import DisplayCell from '../../Container/Display/displayCell';
import { Message } from '../../../../../Other/Model/message';

const useStyle = makeStyles(() =>
  createStyles({
    tableContainer: {
      maxHeight: '100%',
      gridRow: 4,
      gridColumn: 2
    },
    table: {},
    tableBody: {
      textAlign: 'left'
    }
  })
);

type DisplayProps = { messages: Message[] | null };

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const styles = useStyle();
  const { messages = null } = props;

  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} stickyHeader>
          <TableBody className={styles.tableBody}>
            {messages
              ? [...Array(messages.length)].map((_, index) => (
                  <DisplayCell key={`dispCell_${index}`} message={messages[index]} />
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Display;
