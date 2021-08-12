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

import { Image } from '../../../../Other/Model/image';

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
    iconButton: {
      '&:hover': {
        backgroundColor: '#ffb7db'
      }
    }
  })
);

type DetailPictureProps = {
  image: Image;
  handleFavClick: () => void;
  isFav: boolean;
  isDisabled: boolean;
  favCount: number;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const {
    image,
    handleFavClick = () => undefined,
    isFav = false,
    isDisabled = false,
    favCount = 0
  } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Card className={styles.rootPC}>
          {image.iconUrl ? (
            <CardHeader
              avatar={<Avatar src={image.iconUrl} />}
              title={image.title}
              subheader={image.displayName}
            />
          ) : (
            <CardHeader
              avatar={<AccountCircle />}
              title={image.title}
              subheader={image.displayName}
            />
          )}
          <div className={styles.inner_outerPC}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions>
            <IconButton
              aria-label='add to favorites'
              className={styles.iconButton}
              onClick={handleFavClick}
              disabled={isDisabled}
            >
              {isFav ? <FavoriteIcon className={styles.button} /> : <FavoriteIcon />}
            </IconButton>
            {favCount === 0 ? null : <Typography>{favCount}</Typography>}
          </CardActions>
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.rootPhone}>
          {image.iconUrl ? (
            <CardHeader
              avatar={<Avatar src={image.iconUrl} />}
              title={image.title}
              subheader={image.displayName}
            />
          ) : (
            <CardHeader
              avatar={<AccountCircle />}
              title={image.title}
              subheader={image.displayName}
            />
          )}
          <div className={styles.inner_outerPhone}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions>
            <IconButton
              aria-label='add to favorites'
              className={styles.iconButton}
              onClick={handleFavClick}
              disabled={isDisabled}
            >
              {isFav ? <FavoriteIcon className={styles.button} /> : <FavoriteIcon />}
            </IconButton>
            {favCount === 0 ? null : <Typography>{favCount}</Typography>}
          </CardActions>
        </Card>
      </MediaQuery>
    </>
  );
};

export default DetailPicture;
