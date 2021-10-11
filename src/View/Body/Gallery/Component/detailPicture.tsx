import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
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
    typo: {
      margin: '0.5em'
    },
    titlePC: {
      fontSize: '17px',
      fontFamily: 'KosugiMaru',
      color: theme.palette.darkGreen.main,
      gridRow: 1,
      gridColumn: 2
    },
    titlePhone: {
      fontSize: '12px',
      fontFamily: 'Kosugi Maru',
      color: theme.palette.darkGreen.main,
      gridRow: 1,
      gridColumn: 1
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
    fabPC: {
      backgroundColor: theme.palette.red.second,
      '&:hover': {
        backgroundColor: theme.palette.red.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.red.second
      },
      gridRow: 1,
      gridColumn: 3
    },
    fabPhone: {
      backgroundColor: theme.palette.red.second,
      '&:hover': {
        backgroundColor: theme.palette.red.second
      },
      '&:disabled': {
        backgroundColor: theme.palette.red.second
      },
      gridRow: 1,
      gridColumn: 2
    },
    countPC: {
      gridRow: 1,
      gridColumn: 4,
      color: theme.palette.darkGreen.main
    },
    countPhone: {
      gridRow: 1,
      gridColumn: 3,
      color: theme.palette.darkGreen.main
    },
    favIcon: {
      color: theme.palette.white.main
    },
    actionsPC: {
      display: 'grid',
      gridTemplateColumns: '10% 60% 15% 15%',
      gridTemplateRows: '100%'
    },
    actionsPhone: {
      display: 'grid',
      gridTemplateColumns: '55% 30% 15%',
      gridTemplateRows: '100%'
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

  console.log(favNum);

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        <Card className={styles.rootPC}>
          <div className={styles.inner_outerPC}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions className={styles.actionsPC}>
            <Typography className={styles.titlePC}>{image.title}</Typography>
            <Fab className={styles.fabPC} size='small' disabled={true}>
              <FavoriteIcon className={styles.favIcon} />
            </Fab>
            {favNum === 0 ? null : (
              <Typography className={styles.countPC}>{favNum}</Typography>
            )}
          </CardActions>
        </Card>
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        <Card className={styles.rootPhone}>
          <div className={styles.inner_outerPhone}>
            <img className={styles.inner_photo} src={image.imageUrl} />
          </div>
          <CardActions className={styles.actionsPhone}>
            <Typography className={styles.titlePhone}>{image.title}</Typography>
            <Fab className={styles.fabPhone} size='small' disabled={true}>
              <FavoriteIcon className={styles.favIcon} />
            </Fab>
            {favNum === 0 ? null : (
              <Typography className={styles.countPhone}>{favNum}</Typography>
            )}
          </CardActions>
        </Card>
      </MediaQuery>
    </>
  );
};

export default DetailPicture;
