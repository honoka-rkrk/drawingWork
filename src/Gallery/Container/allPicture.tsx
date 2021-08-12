import React, { useState, useEffect, useCallback, useContext } from 'react';
import firebase, { db } from '../../firebase';
import { Image } from '../../Model/image';
import { UserImage } from '../../Model/userImage';
import { FavoriteNum } from '../../Model/favoriteNum';
import { collectionName } from '../../Functions/constants';
import { UserContext } from '../../Context/contexts';

import CompAllPicture from '../Component/allPicture';

const AllPicture: React.FC = () => {
  const [images, setImages] = useState<Array<UserImage> | null>(null);
  const [favNum, setFavNum] = useState<Array<FavoriteNum> | null>(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    let unmounted = false;
    const getImages = async () => {
      if (user) {
        const imagesRef = db.collection('users').doc(user.id).collection('images');
        await imagesRef.get().then((snapshot: firebase.firestore.QuerySnapshot) => {
          const newImages: any[] = [];
          snapshot.forEach((doc) => {
            newImages.push({
              id: doc.id,
              ...doc.data()
            });
          });
          console.log(newImages);
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
    let unmounted = false;
    if (images && user) {
      console.log(images);
      images.forEach((_, index) => {
        const getFav = async () => {
          await db
            .collection('images')
            .doc(images[index].date)
            .collection('image')
            .doc(user.screenName)
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
              console.log(newFavNum);
              if (!unmounted) setFavNum(newFavNum);
            });
        };
        getFav();
      });
      return () => {
        unmounted = true;
      };
    }
  }, [images]);

  return <CompAllPicture images={images} favNum={favNum} />;
};

export default AllPicture;
