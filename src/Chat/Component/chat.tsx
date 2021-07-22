import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Display from '../Container/Display/display';
import WritingSpace from '../Container/WritingSpace/writingSpace';
import Timer from '../Container/Timer/timer';
import DispTheme from '../Container/dispTheme';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      gridRow: 2,
      gridColumn: 2,
      display: 'grid',
      gridTemplateColumns: '68% 4% 28%',
      gridTemplateRows: '100%'
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

type ChatProps = {
  isStart: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
  const { isStart, setIsStart } = props;
  const styles = useStyle();
  return (
    <>
      <Box className={styles.timer}>
        <Timer isStart={isStart} setIsStart={setIsStart} />
        <DispTheme isStart={isStart} />
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
