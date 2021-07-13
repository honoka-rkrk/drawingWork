import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { Image } from '../../Model/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commonPC: {
      width: 594,
      height: 420,
      flexGrow: 1
    },
    commonPhone: {
      width: 297,
      height: 210,
      flexGrow: 1
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    imgBoxPC: {
      display: 'flex',
      alignItems: 'center'
    },
    imgPC: {
      maxHeight: 594,
      display: 'block',
      maxWidth: 420,
      objectFit: 'cover'
    },
    imgPhone: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
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
};

const DispPicture: React.FC<DispPictureProps> = (props: DispPictureProps) => {
  const {
    images = null,
    activeStep = 0,
    maxSteps = 0,
    handleNext = () => undefined,
    handleBack = () => undefined,
    handleStepChange = () => undefined
  } = props;
  const styles = useStyles();

  return (
    <>
      {images ? (
        <Box className={styles.commonPC}>
          <Paper square elevation={0} className={styles.header}>
            <Typography>{images[activeStep].title}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={'x-reverse'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((image, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={styles.imgPC}
                    src={image.imageUrl}
                    alt={image.title}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
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
              <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </Box>
      ) : null}
    </>
  );
};

export default DispPicture;
