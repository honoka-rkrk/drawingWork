import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import { Image } from '../../../../Other/Model/image';

const useStyles = makeStyles((theme: Theme) =>
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
      margin: '0.5em 0'
    },
    inner_outerPhone: {
      position: 'relative',
      width: '100%',
      height: '200px',
      margin: '0.5em 0'
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
      backgroundColor: theme.palette.white.main,
      color: theme.palette.white.main
    },
    iconButton: {
      '&:hover': {
        backgroundColor: '#ffb7db'
      }
    },
    title: {
      color: theme.palette.darkGreen.main,
      fontFamily: 'Mplus',
      fontSize: '13px'
    },
    headerPC: {
      padding: '1px',
      marginTop: '5px',
      marginLeft: '15px',
      marginRight: '15px'
    },
    headerPhone: {
      padding: '1px',
      marginTop: '5px'
    },
    subHeaderColorPC: {
      color: theme.palette.darkGreen.second,
      fontSize: '18px',
      fontFamily: 'Mplus'
    },
    subHeaderColorPhone: {
      color: theme.palette.darkGreen.second,
      fontSize: '11px',
      fontFamily: 'Mplus'
    },
    actionPhone: {
      padding: '1px'
    },
    fabPC: {
      backgroundColor: theme.palette.red.disabled,
      '&:hover': {
        backgroundColor: theme.palette.red.disabled
      },
      marginTop: '10px'
    },
    fabPhone: {
      backgroundColor: theme.palette.red.disabled,
      '&:hover': {
        backgroundColor: theme.palette.red.disabled
      },
      marginTop: '10px'
    },
    favIcon: {
      color: theme.palette.white.main
    },
    favIconClicked: {
      color: theme.palette.red.second
    },
    countText: {
      fontSize: '13px',
      fontFamily: 'Mplus',
      marginTop: '10px'
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
              className={styles.headerPC}
              avatar={<Avatar src={image.iconUrl} />}
              title={image.title}
              subheader={image.displayName}
            />
          ) : (
            <CardHeader
              className={styles.headerPC}
              avatar={<AccountCircle />}
              title={image.title}
              subheader={image.displayName}
            />
          )}
          <div className={styles.inner_outerPC}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions>
            <Fab
              className={styles.fabPC}
              size='small'
              onClick={handleFavClick}
              disabled={isDisabled}
              aria-label='add to favorites'
            >
              {isFav ? (
                <FavoriteIcon className={styles.favIconClicked} />
              ) : (
                <FavoriteIcon className={styles.favIcon} />
              )}
            </Fab>
            {favCount === 0 ? null : (
              <Typography className={styles.countText}>{favCount}</Typography>
            )}
          </CardActions>
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.rootPhone}>
          {image.iconUrl ? (
            <CardHeader
              className={styles.headerPhone}
              avatar={<Avatar src={image.iconUrl} />}
              title={<Typography className={styles.title}>{image.title}</Typography>}
              subheader={
                <Typography className={styles.subHeaderColorPhone}>
                  {image.displayName}
                </Typography>
              }
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
          <CardActions className={styles.actionPhone}>
            <Fab
              className={styles.fabPhone}
              size='small'
              onClick={handleFavClick}
              disabled={isDisabled}
              aria-label='add to favorites'
            >
              {isFav ? (
                <FavoriteIcon className={styles.favIconClicked} />
              ) : (
                <FavoriteIcon className={styles.favIcon} />
              )}
            </Fab>
            {favCount === 0 ? null : (
              <Typography className={styles.countText}>{favCount}</Typography>
            )}
          </CardActions>
        </Card>
      </MediaQuery>
    </>
  );
};

export default DetailPicture;
