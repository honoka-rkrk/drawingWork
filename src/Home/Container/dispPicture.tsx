import React, { useState, useEffect, useRef } from 'react';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';

import CompDispPicture from '../../Home/Component/dispPicture';

const DispPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);

  //前回の画像を取得
  useEffect(() => {
    let unmounted = false;
    const getImages = async () => {
      const imagesRef = db.collection('images');
      await imagesRef
        .orderBy('createdAt')
        .get()
        .then((snapshot: firebase.firestore.QuerySnapshot) => {
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

  return (
    <CompDispPicture
      images={images}
      activeStep={activeStep}
      maxSteps={maxSteps}
      handleNext={handleNext}
      handleBack={handleBack}
      handleStepChange={handleStepChange}
    />
  );
};

export default DispPicture;
