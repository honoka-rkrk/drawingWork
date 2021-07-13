import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MediaQuery from "react-responsive";

import { Image } from "../../Model/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commonPC: {
      width: 500,
      height: "100%",
    },
    commonPhone: {
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    imgBoxPC: {
      display: "flex",
      alignItems: "center",
    },
    imgPC: {
      maxHeight: 450,
      display: "block",
      maxWidth: "100%",
      objectFit: "cover",
    },
    imgPhone: {
      maxHeight: 300,
      display: "block",
      width: "100%",
      objectFit: "cover",
    },
    button: {
      width: "100%",
    },
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
    image = null,
  } = props;
  const styles = useStyles();

  return (
    <>
      <MediaQuery query="(min-width:767px)">
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
              <AutoPlaySwipeableViews
                axis={"x-reverse"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((image, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={styles.imgPC} src={image.imageUrl} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </CardContent>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </Card>
        ) : null}
      </MediaQuery>
      <MediaQuery query="(max-width:767px)">
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
              <AutoPlaySwipeableViews
                axis={"x-reverse"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((image, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={styles.imgPhone} src={image.imageUrl} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </CardContent>
            <CardActions>
              <MobileStepper
                className={styles.button}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
            </CardActions>
          </Card>
        ) : null}
      </MediaQuery>
    </>
  );
};

export default DispPicture;
