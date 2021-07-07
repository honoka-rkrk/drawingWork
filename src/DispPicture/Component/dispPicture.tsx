import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Image } from '../../Model/image';

import DetailPicture from '../Container/detailPicture';
import ExitBtn from '../Container/exitBtn';

const useStyles = makeStyles(() =>
  createStyles({
    common: {
      marginTop: '30px'
    }
  })
);

type DispPictureProps = {
  images: Image[] | null;
};

const DispPicture: React.FC<DispPictureProps> = (props: DispPictureProps) => {
  const { images = null } = props;
  const styles = useStyles();

  return (
    <>
      {images
        ? [...Array(images.length)].map((_, index) => (
            <Box className={styles.common} key={`images_${index}`}>
              <DetailPicture image={images[index]} />
            </Box>
          ))
        : null}
      <ExitBtn />
    </>
  );
};

export default DispPicture;
