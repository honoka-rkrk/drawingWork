import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Display from '../Container/Display/display';
import WritingSpace from '../Container/WritingSpace/writingSpace';
import Timer from '../Container/Timer/timer';
import DispTheme from '../Container/dispTheme';
import ExitBtn from '../Container/exitBtn';
import MediaQuery from 'react-responsive';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      gridRow: 2,
      gridColumn: 2,
      display: 'grid',
      gridTemplateColumns: '65.35% 3.85% 30.8%',
      gridTemplateRows: '100%'
    },
    display: {
      gridRow: 4,
      gridColumn: 2,
      backgroundColor: theme.palette.white.main,
      borderRadius: '10px'
    },
    writingSpacePC: {
      display: 'grid',
      gridTemplateRows: '2% 96% 2%',
      gridTemplateColumns: '2% 68% 28% 2%',
      width: '100%',
      gridRow: 6,
      gridColumn: 2,
      borderColor: `${theme.palette.primary}`
    },
    writingSpacePhone: {
      display: 'grid',
      gridTemplateRows: '100',
      gridTemplateColumns: '2.85% 75.49% 6.84% 13.68% 1.14%',
      width: '100%',
      gridRow: 6,
      gridColumn: 2
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
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.timer}>
          <Timer isStart={isStart} setIsStart={setIsStart} />
          <DispTheme isStart={isStart} />
        </Box>
        <Box className={styles.display}>
          <Display />
        </Box>
        <Box className={styles.writingSpacePC}>
          <WritingSpace />
        </Box>
        <ExitBtn />
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.timer}>
          <Timer isStart={isStart} setIsStart={setIsStart} />
          <DispTheme isStart={isStart} />
        </Box>
        <Box className={styles.display}>
          <Display />
        </Box>
        <Box className={styles.writingSpacePhone}>
          <WritingSpace />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Chat;
