import React, { useState, useEffect, useCallback } from 'react';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';
import { collectionName } from '../../Functions/constants';

import CompAllPicture from '../Component/allPicture';

const AllPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [favNum, setFavNum] = useState<number>(2);

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
          if (!unmounted) setImages(newImages);
        });
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    console.log(images);
    if (images) {
      images.forEach((_, index) => {
        const getFav = async () => {
          await db
            .collection('images')
            .doc(images[index].id)
            .collection(collectionName.favoriteUsers)
            .get()
            .then((snapshot: firebase.firestore.QuerySnapshot) => {
              const newFavInfo: any[] = [];
              snapshot.forEach((doc) => {
                newFavInfo.push({
                  id: doc.id,
                  ...doc.data()
                });
              });
              console.log(newFavInfo);
            });
        };
        getFav();
      });
    }
  }, [images]);

  return <CompAllPicture images={images} favNum={favNum} setFavNum={setFavNum} />;
};

export default AllPicture;
