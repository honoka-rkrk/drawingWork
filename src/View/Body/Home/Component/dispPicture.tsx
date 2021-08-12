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
import MediaQuery from 'react-responsive';

import { Image } from '../../../../Other/Model/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commonPC: {
      width: '80%',
      height: '100%'
    },
    commonPhone: {
      width: '100%',
      height: '100%',
      alignItems: 'center'
    },
    imgBoxPC: {
      display: 'flex',
      alignItems: 'center'
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
      height: '300px',
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
      width: '100%'
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
};

const DispPicture: React.FC<DispPictureProps> = (props: DispPictureProps) => {
  const {
    images = null,
    activeStep = 0,
    maxSteps = 0,
    handleNext = () => undefined,
    handleBack = () => undefined,
    handleStepChange = () => undefined,
    image = null
  } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query='(min-width:767px)'>
        {images && image ? (
          <Card className={styles.commonPC}>
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
            <CardContent>
              <MobileStepper
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
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button
                    size='small'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
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
            </CardContent>
          </Card>
        ) : null}
      </MediaQuery>
      <MediaQuery query='(max-width:767px)'>
        {images && image ? (
          <Card className={styles.commonPhone}>
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
            <CardContent>
              <MobileStepper
                className={styles.button}
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
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button
                    size='small'
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
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
            </CardContent>
          </Card>
        ) : null}
      </MediaQuery>
    </>
  );
};

export default DispPicture;
