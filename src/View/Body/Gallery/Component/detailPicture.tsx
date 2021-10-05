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
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import { Image } from '../../../../Other/Model/image';
import { UserImage } from '../../../../Other/Model/userImage';

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
      margin: '0.5em'
    },
    titlePC: {
      fontSize: '18pt',
      fontFamily: 'Mplus',
      color: theme.palette.darkGreen.main
    },
    titlePhone: {
      fontSize: '14pt',
      fontFamily: 'Mplus',
      color: theme.palette.darkGreen.main
    },
    iconButton: {
      '&:hover': {
        backgroundColor: '#ffb7db'
      }
    },
    headerPC: {
      padding: '7px',
      marginLeft: '15px',
      marginRight: '15px'
    },
    headerPhone: {
      padding: '1px',
      marginLeft: '15px',
      marginRight: '15px'
    },
    fabPhone: {
      backgroundColor: theme.palette.red.second,
      '&:hover': {
        backgroundColor: theme.palette.red.second
      },
      marginTop: '10px'
    },
    favIcon: {
      color: theme.palette.white.main
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
          <CardHeader
            className={styles.headerPC}
            action={
              <Fab className={styles.fabPhone} size='small'>
                <FavoriteIcon className={styles.favIcon} />
              </Fab>
            }
            title={<Typography className={styles.titlePC}>{image.title}</Typography>}
          />
          <div className={styles.inner_outerPC}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.rootPhone}>
          <CardHeader
            className={styles.headerPhone}
            action={
              <Fab className={styles.fabPhone} size='small'>
                <FavoriteIcon className={styles.favIcon} />
              </Fab>
            }
            title={<Typography>{image.title}</Typography>}
          />
          <div className={styles.inner_outerPhone}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
        </Card>
      </MediaQuery>
    </>
  );
};

export default DetailPicture;
