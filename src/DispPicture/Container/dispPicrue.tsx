import React, { useState, useEffect } from 'react';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';

import CompDispPicture from '../Component/dispPicture';

const DispPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [favNum, setFavNum] = useState<number>(5);

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
              ...doc.data()
            });
          });
          if (!unmounted) setImages(newImages);
        });
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  return <CompDispPicture images={images} />;
};

export default DispPicture;
