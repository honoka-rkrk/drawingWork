import React, { useState, useEffect } from 'react';
import firebase, { db } from '../../../../firebase';
import { Image } from '../../../../Other/Model/image';
import moment from 'moment';

import CompAllPicture from '../Component/allPicture';

const AllPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [favNum, setFavNum] = useState<number>(2);

  useEffect(() => {
    let unmounted = false;
    const getImages = async () => {
      const imagesRef = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image');
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
          if (!unmounted) setImages(newImages);
        });
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  return <CompAllPicture images={images} favNum={favNum} setFavNum={setFavNum} />;
};

export default AllPicture;
