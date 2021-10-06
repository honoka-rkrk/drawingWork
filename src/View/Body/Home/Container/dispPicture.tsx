import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

import firebase, { db } from '../../../../firebase';
import { Image } from '../../../../Other/Model/image';
import { FavoriteNum } from '../../../../Other/Model/favoriteNum';
import CompDispPicture from '../Component/dispPicture';

const DispPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const [image, setImage] = useState<Image | null>(null);
  const [favNums, setFavNums] = useState<Array<FavoriteNum> | null>(null);
  const [favNum, setFavNum] = useState<number>(0);

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

  //favカウントを取得
  useEffect(() => {
    let unmounted = false;
    if (images) {
      images.forEach((_, index) => {
        const getFav = async () => {
          await db
            .collection('images')
            .doc(moment().format('YYYYMMDD'))
            .collection('image')
            .doc(images[index].screenName)
            .collection('favoriteNum')
            .get()
            .then((snapshot: firebase.firestore.QuerySnapshot) => {
              const newFavNum: any[] = [];
              snapshot.forEach((doc) => {
                newFavNum.push({
                  id: doc.id,
                  ...doc.data()
                });
              });
              if (!unmounted) setFavNums(newFavNum);
            });
        };
        getFav();
      });
      return () => {
        unmounted = true;
      };
    }
  }, [images]);

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
    if (favNums) {
      favNums[activeStep] ? setFavNum(favNums[activeStep].count) : setFavNum(0);
    }
  }, [images, activeStep, favNums]);
  return (
    <CompDispPicture
      images={images}
      activeStep={activeStep}
      maxSteps={maxSteps}
      handleNext={handleNext}
      handleBack={handleBack}
      handleStepChange={handleStepChange}
      image={image}
      favNum={favNum}
    />
  );
};

export default DispPicture;
