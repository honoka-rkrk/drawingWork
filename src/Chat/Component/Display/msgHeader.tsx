import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyle = makeStyles(() =>
  createStyles({
    tableCellCommon: {
      lineHeight: 'lem',
      padding: 0,
      '&:last-child': {
        padding: 0
      },
      backgroundColor: `#ff6333`
    },
    tableHeader: {
      height: 'calc(((100vh - 180px) * 0.95) / 28 * 2)'
    }
  })
);

const MsgHeader: React.FC = () => {
  const styles = useStyle();
  return (
    <TableHead className={styles.tableHeader}>
      <TableRow>
        <TableCell align='center' className={styles.tableCellCommon}>
          {'メッセージ'}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MsgHeader;
