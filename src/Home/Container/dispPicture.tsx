import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';

import CompDispPicture from '../../Home/Component/dispPicture';

const DispPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const [image, setImage] = useState<Image | null>(null);

  //前回の画像を取得
  useEffect(() => {
    let unmounted = false;
    const getImages = async () => {
      const imagesRef = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image');
      await imagesRef.get().then((snapshot: firebase.firestore.QuerySnapshot) => {
        const newImages: any[] = [];
        snapshot.forEach((doc) => {
          newImages.push({
            id: doc.id,
            ...doc.data()
          });
        });
        if (!unmounted && newImages) {
          setImages(newImages);
          setMaxSteps(newImages.length);
        }
      });
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  useEffect(() => {
    if (images) {
      setImage(images[activeStep]);
    }
  }, [images, activeStep]);
  return (
    <CompDispPicture
      images={images}
      activeStep={activeStep}
      maxSteps={maxSteps}
      handleNext={handleNext}
      handleBack={handleBack}
      handleStepChange={handleStepChange}
      image={image}
    />
  );
};

export default DispPicture;
