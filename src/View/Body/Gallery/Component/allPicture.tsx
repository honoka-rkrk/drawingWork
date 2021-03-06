import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MediaQuery from 'react-responsive';

import { UserImage } from '../../../../Other/Model/userImage';
import DetailPicture from '../Container/detailPicture';
import ExitBtn from '../Container/exitBtn';

const useStyles = makeStyles(() =>
  createStyles({
    commonPC: {
      marginTop: '30px'
    },
    commonPhone: {
      marginTop: '5px'
    },
    countfab: {
      position: 'absolute',
      bottom: '2rem',
      left: '2rem'
    }
  })
);

type AllPictureProps = {
  images: UserImage[] | null;
};

const AllPicture: React.FC<AllPictureProps> = (props: AllPictureProps) => {
  const { images = null } = props;
  const styles = useStyles();
  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {images
          ? [...Array(images.length)].map((_, index) => (
              <Box className={styles.commonPC} key={`images_${index}`}>
                <DetailPicture image={images[index]} />
              </Box>
            ))
          : null}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {images
          ? [...Array(images.length)].map((_, index) => (
              <Box className={styles.commonPhone} key={`images_${index}`}>
                <DetailPicture image={images[index]} />
              </Box>
            ))
          : null}
      </MediaQuery>
      <ExitBtn />
    </>
  );
};

export default AllPicture;
