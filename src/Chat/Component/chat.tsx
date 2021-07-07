import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Display from '../Container/Display/display';
import WritingSpace from '../Container/WritingSpace/writingSpace';
import Timer from '../Container/Timer/timer';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      gridRow: 2,
      gridColumn: 2
    },
    display: {
      gridRow: 4,
      gridColumn: 2
    },
    writingSpace: {
      display: 'grid',
      gridTemplateRows: '2% 96% 2%',
      gridTemplateColumns: '2% 68% 28% 2%',
      width: '100%',
      gridRow: 6,
      gridColumn: 2,
      borderColor: `${theme.palette.primary}`
    }
  })
);

const Chat: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.timer}>
        <Timer />
      </Box>
      <Box className={styles.display}>
        <Display />
      </Box>
      <Box className={styles.writingSpace}>
        <WritingSpace />
      </Box>
    </>
  );
};

export default Chat;
