import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import MediaQuery from 'react-responsive';

import { Image } from '../../../../Other/Model/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commonPC: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: theme.palette.white.main,
      color: theme.palette.darkGreen.main
    },
    commonPhone: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: theme.palette.white.main,
      color: theme.palette.darkGreen.main,
      fontSize: '20px'
    },
    headerPC: {
      color: theme.palette.darkGreen.main,
      fontFamily: 'Kosugi Maru',
      fontSize: '24px'
    },
    headerPhone: {
      padding: '1px',
      marginTop: '15px',
      marginLeft: '15px',
      marginRight: '15px'
    },
    subHeaderColorPC: {
      color: theme.palette.darkGreen.second,
      fontSize: '18px',
      fontFamily: 'Kosugi Maru'
    },
    subHeaderColorPhone: {
      color: theme.palette.darkGreen.second,
      fontSize: '14px',
      fontFamily: 'Kosugi Maru'
    },
    contentPhone: {
      padding: '1px',
      marginTop: '5px',
      marginLeft: '15px',
      marginRight: '15px'
    },
    imgBoxPC: {
      display: 'flex',
      alignItems: 'center'
    },
    inner_outerPC: {
      position: 'relative',
      width: '100%',
      height: '420px',
      margin: '1em 0'
    },
    inner_outerPhone: {
      position: 'relative',
      width: '100%',
      height: '280px',
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
    stepperPC: {
      width: '100%',
      backgroundColor: theme.palette.yellow.main,
      color: theme.palette.white.main,
      borderRadius: '10px',
      fontSize: '24px',
      fontFamily: 'Kosugi Maru'
    },
    stepperPhone: {
      width: '100%',
      backgroundColor: theme.palette.yellow.main,
      color: theme.palette.white.main,
      borderRadius: '10px',
      fontSize: '14px',
      fontFamily: 'Kosugi Maru'
    },
    moveButton: {
      color: theme.palette.white.main
    },
    fabPC: {
      backgroundColor: theme.palette.red.second,
      '&:hover': {
        backgroundColor: theme.palette.red.second
      },
      marginTop: '10px',
      marginLeft: '30px'
    },
    fabPhone: {
      backgroundColor: theme.palette.red.second,
      '&:hover': {
        backgroundColor: theme.palette.red.second
      }
    },
    favIcon: {
      color: theme.palette.white.main
    },
    action: {
      display: 'flex',
      alignItems: 'center'
    },
    count: {
      marginLeft: '20px',
      marginTop: '10px',
      marginRight: '10px',
      color: theme.palette.darkGreen.main
    }
  })
);

type DispPictureProps = {
  images: Image[] | null;
  activeStep: number;
  maxSteps: number;
  handleNext: () => void;
  handleBack: () => void;
  handleStepChange: (step: number) => void;
  image: Image | null;
  favNum: number;
};

const DispPicture: React.FC<DispPictureProps> = (props: DispPictureProps) => {
  const {
    images = null,
    activeStep = 0,
    maxSteps = 0,
    handleNext = () => undefined,
    handleBack = () => undefined,
    handleStepChange = () => undefined,
    image = null,
    favNum = 0
  } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {images && image ? (
          <Card className={styles.commonPC}>
            {image.iconUrl ? (
              <CardHeader
                className={styles.headerPC}
                avatar={<Avatar src={image.iconUrl} />}
                action={
                  <>
                    <Box className={styles.action}>
                      <Fab className={styles.fabPC}>
                        <FavoriteIcon className={styles.favIcon} />
                      </Fab>
                      <Typography className={styles.count}>
                        {favNum == 0 ? null : favNum}
                      </Typography>
                    </Box>
                  </>
                }
                title={
                  <Typography className={styles.headerPC}>{image.title}</Typography>
                }
                subheader={
                  <Typography className={styles.subHeaderColorPC}>
                    {image.displayName}
                  </Typography>
                }
              />
            ) : (
              <CardHeader
                avatar={<AccountCircle />}
                action={
                  <>
                    <Box className={styles.action}>
                      <Fab className={styles.fabPC}>
                        <FavoriteIcon className={styles.favIcon} />
                      </Fab>
                      <Typography className={styles.count}>
                        {favNum == 0 ? null : favNum}
                      </Typography>
                    </Box>
                  </>
                }
                title={
                  <Typography className={styles.headerPC}>{image.title}</Typography>
                }
                subheader={
                  <Typography className={styles.subHeaderColorPC}>
                    {image.displayName}
                  </Typography>
                }
              />
            )}
            <CardContent>
              <AutoPlaySwipeableViews
                axis={'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((image, index) => (
                  <div key={index} className={styles.inner_outerPC}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={styles.inner_photo} src={image.imageUrl} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                className={styles.stepperPC}
                steps={maxSteps}
                position='static'
                variant='text'
                activeStep={activeStep}
                nextButton={
                  <Button
                    size='small'
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    <KeyboardArrowRight className={styles.moveButton} />
                  </Button>
                }
                backButton={
                  <Button
                    className={styles.moveButton}
                    size='small'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft className={styles.moveButton} />
                  </Button>
                }
              />
            </CardContent>
          </Card>
        ) : null}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {images && image ? (
          <Card className={styles.commonPhone}>
            {image.iconUrl ? (
              <CardHeader
                className={styles.headerPhone}
                avatar={<Avatar src={image.iconUrl} />}
                action={
                  <Box className={styles.action}>
                    <Fab className={styles.fabPhone}>
                      <FavoriteIcon className={styles.favIcon} />
                    </Fab>
                    <Typography className={styles.count}>
                      {favNum == 0 ? null : favNum}
                    </Typography>
                  </Box>
                }
                title={image.title}
                subheader={
                  <Typography className={styles.subHeaderColorPhone}>
                    {image.displayName}
                  </Typography>
                }
              />
            ) : (
              <CardHeader
                className={styles.headerPhone}
                avatar={<AccountCircle />}
                action={
                  <Box className={styles.action}>
                    <Fab className={styles.fabPhone}>
                      <FavoriteIcon className={styles.favIcon} />
                    </Fab>
                    <Typography className={styles.count}>
                      {favNum == 0 ? null : favNum}
                    </Typography>
                  </Box>
                }
                title={image.title}
                subheader={
                  <Typography className={styles.subHeaderColorPhone}>
                    {image.displayName}
                  </Typography>
                }
              />
            )}
            <CardContent className={styles.contentPhone}>
              <AutoPlaySwipeableViews
                axis={'x-reverse'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((image, index) => (
                  <div key={index} className={styles.inner_outerPhone}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={styles.inner_photo} src={image.imageUrl} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                className={styles.stepperPhone}
                steps={maxSteps}
                position='static'
                variant='text'
                activeStep={activeStep}
                nextButton={
                  <Button
                    className={styles.moveButton}
                    size='small'
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    <KeyboardArrowRight className={styles.moveButton} />
                  </Button>
                }
                backButton={
                  <Button
                    className={styles.moveButton}
                    size='small'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft className={styles.moveButton} />
                  </Button>
                }
              />
            </CardContent>
          </Card>
        ) : null}
      </MediaQuery>
    </>
  );
};

export default DispPicture;
