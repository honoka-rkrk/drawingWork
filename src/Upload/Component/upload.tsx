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
      gridColumn: 2
    }
  })
);

const Upload: React.FC = () => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.timerDisp}>
        <Timer />
      </Box>
      <Box className={styles.uploadCommon}>
        <UploadCard />
      </Box>
      <ExitBtn />
    </>
  );
};

export default Upload;
