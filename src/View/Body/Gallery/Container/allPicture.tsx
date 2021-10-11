import React, { useState, useEffect, useContext } from 'react';
import firebase, { db } from '../../../../firebase';
import { UserImage } from '../../../../Other/Model/userImage';
import { UserContext } from '../../../../Other/Context/contexts';

import CompAllPicture from '../Component/allPicture';

const AllPicture: React.FC = () => {
  const [images, setImages] = useState<Array<UserImage> | null>(null);
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
          if (!unmounted) setImages(newImages);
        });
      }
    };
    getImages();
    return () => {
      unmounted = true;
    };
  }, []);

  return <CompAllPicture images={images} />;
};

export default AllPicture;
