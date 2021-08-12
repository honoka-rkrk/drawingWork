import React, { useState, useEffect, useCallback, useContext } from 'react';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';
import { collectionName } from '../../Functions/constants';
import { UserContext } from '../../Context/contexts';

import CompAllPicture from '../Component/allPicture';

const AllPicture: React.FC = () => {
  const [images, setImages] = useState<Array<Image> | null>(null);
  const [favNum, setFavNum] = useState<number>(2);
  const { user } = useContext(UserContext);

  useEffect(() => {
    let unmounted = false;
    const getImages = async () => {
      if (user) {
        //const imagesRef = db.collection('users').doc(user.id).collection('images');
        const imagesRef = db.collection('image');
        await imagesRef
          .where('screenName', '==', user.screenName)
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
            console.log(images);
            if (!unmounted) setImages(newImages);
          });
      }
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
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
            });
        };
        getFav();
      });
    }
  }, [images]);

  return <CompAllPicture images={images} favNum={favNum} setFavNum={setFavNum} />;
};

export default AllPicture;
