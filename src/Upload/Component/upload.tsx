import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Timer from '../Container/timer';
import ExitBtn from '../Container/exitBtn';
import UploadCard from '../Container/uploadCard';

const useStyle = makeStyles(() =>
  createStyles({
    timerDisp: {
      gridRow: 2,
      gridColumn: 2,
      height: '100%'
    },
    uploadCommon: {
      gridRow: 4,
      gridColumn: 2,
      height: '100%'
    }
  })
);

type UploadProps = {
  setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpd: React.Dispatch<React.SetStateAction<boolean>>;
};

const Upload: React.FC<UploadProps> = (props: UploadProps) => {
  const styles = useStyle();
  const { setTimerEnd, setIsUpd } = props;
  return (
    <>
      <Box className={styles.timerDisp}>
        <Timer setTimerEnd={setTimerEnd} />
      </Box>
      <Box className={styles.uploadCommon}>
        <UploadCard setIsUpd={setIsUpd} />
      </Box>
      <ExitBtn />
    </>
  );
};

export default Upload;
