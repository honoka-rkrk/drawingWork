import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MediaQuery from 'react-responsive';

import Timer from '../Container/timer';
import ExitBtn from '../Container/exitBtn';
import UploadCard from '../Container/uploadCard';
import InpTitle from '../Container/inpTitle';
import SendBtn from '../Container/sendBtn';

const useStyle = makeStyles(() =>
  createStyles({
    timerDispPC: {
      gridRow: 2,
      gridColumn: '2 / span 4',
      height: '100%'
    },
    timerDispPhone: {
      gridRow: 2,
      gridColumn: 2,
      height: '100%'
    },
    uploadCommonPC: {
      gridRow: '4 / span 5',
      gridColumn: 2,
      height: '100%'
    },
    uploadCommonPhone: {
      gridRow: 5,
      gridColumn: 2,
      height: '100%'
    },
    sendContents: {
      gridRow: 7,
      gridColumn: 2,
      display: 'grid',
      gridTemplateColumns: '3.54% 41.59% 10.03% 38.94% 5.9%',
      gridTemplateRows: '100%'
    }
  })
);

type UploadProps = {
  setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
  myFiles: File[];
  setMyFiles: React.Dispatch<React.SetStateAction<File[]>>;
  clickable: boolean;
  setClickable: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  handleTitleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleUpload: (accepterdImg: any) => Promise<void>;
  header: string;
  subHeader: string;
};

const Upload: React.FC<UploadProps> = (props: UploadProps) => {
  const styles = useStyle();
  const {
    setTimerEnd,
    myFiles,
    setMyFiles,
    clickable,
    setClickable,
    title,
    handleTitleChange,
    handleUpload,
    header,
    subHeader
  } = props;
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Box className={styles.timerDispPC}>
          <Timer setTimerEnd={setTimerEnd} />
        </Box>
        <Box className={styles.uploadCommonPC}>
          <UploadCard
            myFiles={myFiles}
            setMyFiles={setMyFiles}
            setClickable={setClickable}
            header={header}
            subHeader={subHeader}
          />
        </Box>
        <InpTitle
          myFiles={myFiles}
          clickable={clickable}
          title={title}
          handleTitleChange={handleTitleChange}
        />
        <SendBtn
          myFiles={myFiles}
          clickable={clickable}
          handleUpload={handleUpload}
        />
        <ExitBtn />
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Box className={styles.timerDispPhone}>
          <Timer setTimerEnd={setTimerEnd} />
        </Box>
        <Box className={styles.uploadCommonPhone}>
          <UploadCard
            myFiles={myFiles}
            setMyFiles={setMyFiles}
            setClickable={setClickable}
            header={header}
            subHeader={subHeader}
          />
        </Box>
        <Box className={styles.sendContents}>
          <InpTitle
            myFiles={myFiles}
            clickable={clickable}
            title={title}
            handleTitleChange={handleTitleChange}
          />
          <SendBtn
            myFiles={myFiles}
            clickable={clickable}
            handleUpload={handleUpload}
          />
        </Box>
      </MediaQuery>
    </>
  );
};

export default Upload;
