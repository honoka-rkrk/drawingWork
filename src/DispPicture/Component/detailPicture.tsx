import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Image } from '../../Model/image';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '86.25%'
    }
  })
);

type DetailPictureProps = {
  image: Image;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image } = props;
  const styles = useStyles();

  return (
    <Card className={styles.root}>
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
      <CardMedia className={styles.media} image={image.imageUrl} />
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DetailPicture;
