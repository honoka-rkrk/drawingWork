import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Image } from '../../Model/image';
import { UserImage } from '../../Model/userImage';

const useStyles = makeStyles(() =>
  createStyles({
    rootPC: {
      minWidth: 345
    },
    rootPhone: {
      minWidth: 180
    },
    inner_outerPC: {
      position: 'relative',
      width: '100%',
      height: '400px',
      margin: '1em 0'
    },
    inner_outerPhone: {
      position: 'relative',
      width: '100%',
      height: '200px',
      margin: '1em 0'
    },
    inner_photo: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      height: 'auto',
      width: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      margin: 'auto'
    },
    button: {
      color: '#f50057'
    },
    typo: {
      margin: '1em'
    },
    iconButton: {
      '&:hover': {
        backgroundColor: '#ffb7db'
      }
    }
  })
);

type DetailPictureProps = {
  image: UserImage;
  favNum: number;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image, favNum = 0 } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Card className={styles.rootPC}>
          <Box className={styles.typo}>
            <Typography variant='h6'>{image.title}</Typography>
          </Box>
          {/* <CardHeader title={image.title} /> */}
          <div className={styles.inner_outerPC}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions>
            <FavoriteIcon className={styles.button} />
            {favNum === 0 ? null : <Typography>{favNum}</Typography>}
          </CardActions>
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.rootPhone}>
          <Box className={styles.typo}>
            <Typography variant='h6'>{image.title}</Typography>
          </Box>
          <div className={styles.inner_outerPhone}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions>
            <FavoriteIcon className={styles.button} />
            {favNum === 0 ? null : <Typography>{favNum}</Typography>}
          </CardActions>
        </Card>
      </MediaQuery>
    </>
  );
};

export default DetailPicture;
