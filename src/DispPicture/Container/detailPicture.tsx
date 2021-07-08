import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../firebase';

import { collectionName } from '../../Functions/constants';
import { Image } from '../../Model/image';
import CompDetailPicture from '../Component/detailPicture';
import { UserContext } from '../../Context/contexts';

type DetailPictureProps = {
  image: Image;
  favNum: number;
  setFavNum: React.Dispatch<React.SetStateAction<number>>;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image, favNum, setFavNum } = props;
  const [isFav, setIsFav] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  const handleFavClick = () => {
    if (isFav) {
      setFavNum((prev) => prev + 1);
    } else {
      setFavNum((prev) => prev - 1);
      postFavorite();
    }
    setIsFav((prev) => !prev);
  };

  const postFavorite = () => {
    if (image.id && user) {
      db.collection('images')
        .doc(image.id)
        .collection(collectionName.favoriteUsers)
        .doc()
        .set({
          user: user.screenName
        });
    }
  };

  useEffect(() => {
    if (favNum <= 0 && !isFav) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isFav, favNum]);

  return (
    <CompDetailPicture
      image={image}
      handleFavClick={handleFavClick}
      isFav={isFav}
      isDisabled={isDisabled}
    />
  );
};

export default DetailPicture;
