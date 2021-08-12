import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import MediaQuery from 'react-responsive';

import { Image } from '../../../../Other/Model/image';
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
      position: 'fixed',
      bottom: '2rem',
      left: '2rem'
    }
  })
);

type AllPictureProps = {
  images: Image[] | null;
  favNum: number;
  setFavNum: React.Dispatch<React.SetStateAction<number>>;
};

const AllPicture: React.FC<AllPictureProps> = (props: AllPictureProps) => {
  const { images = null, favNum = 0, setFavNum = () => undefined } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {images
          ? [...Array(images.length)].map((_, index) => (
              <Box className={styles.commonPC} key={`images_${index}`}>
                <DetailPicture
                  image={images[index]}
                  favNum={favNum}
                  setFavNum={setFavNum}
                />
              </Box>
            ))
          : null}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {images
          ? [...Array(images.length)].map((_, index) => (
              <Box className={styles.commonPhone} key={`images_${index}`}>
                <DetailPicture
                  image={images[index]}
                  favNum={favNum}
                  setFavNum={setFavNum}
                />
              </Box>
            ))
          : null}
      </MediaQuery>
      <ExitBtn />
      <Fab
        className={styles.countfab}
        color='secondary'
        aria-label='count'
        disabled={favNum === 0 ? true : false}
      >
        {favNum}
      </Fab>
    </>
  );
};

export default AllPicture;
