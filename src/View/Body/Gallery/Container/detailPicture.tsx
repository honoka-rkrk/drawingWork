import React, { useState, useEffect, useContext } from 'react';
import firebase, { db } from '../../../../firebase';

import { UserImage } from '../../../../Other/Model/userImage';
import CompDetailPicture from '../Component/detailPicture';
import { UserContext } from '../../../../Other/Context/contexts';

type DetailPictureProps = {
  image: UserImage;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image } = props;
  const [favNum, setFavNum] = useState<number>(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    let unmounted = false;
    if (image && user) {
      const getFav = async () => {
        await db
          .collection('images')
          .doc(image.date)
          .collection('image')
          .doc(user.screenName)
          .collection('favoriteNum')
          .doc('favCounters')
          .get()
          .then((doc) => {
            if (!unmounted) {
              if (doc.exists) {
                const getData: any = doc.data();
                setFavNum(getData.count);
              } else {
                setFavNum(0);
              }
            }
          });
      };
      getFav();
      return () => {
        unmounted = true;
      };
    }
  }, [image]);

  return <CompDetailPicture image={image} favNum={favNum} />;
};

export default DetailPicture;
