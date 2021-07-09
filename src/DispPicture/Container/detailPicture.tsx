import React, { useState, useEffect, useContext } from 'react';
import firebase, { db } from '../../firebase';

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

  //ボタンの状態変化
  const handleFavClick = () => {
    if (isFav) {
      setFavNum((prev) => prev + 1);
      deleteFavorite();
    } else {
      setFavNum((prev) => prev - 1);
      postFavorite();
    }
    setIsFav((prev) => !prev);
  };

  //いいねを追加。カウントも１追加
  const postFavorite = async () => {
    const batch = db.batch();
    //ユーザーのスクリーン名とディスプレイネームを追加
    if (image.id && user) {
      const favoriteUsersDoc = db
        .collection('images')
        .doc(image.id)
        .collection(collectionName.favoriteUsers)
        .doc(user.screenName);

      batch.set(favoriteUsersDoc, {
        user: user.displayName
      });

      //全てのいいねの数をカウント
      const favoriteNumDoc = db
        .collection('images')
        .doc(image.id)
        .collection(collectionName.favoriteNum)
        .doc(collectionName.favCounters);

      batch.set(
        favoriteNumDoc,
        {
          count: firebase.firestore.FieldValue.increment(1)
        },
        {
          merge: true
        }
      );
      await batch.commit();
    }
  };

  //いいねの消去、カウントも１減算
  const deleteFavorite = async () => {
    const batch = db.batch();
    if (image.id && user) {
      //ユーザーのスクリーン名とディスプレイネームを消去
      const favoriteUsersDoc = db
        .collection('images')
        .doc(image.id)
        .collection(collectionName.favoriteUsers)
        .doc(user.screenName);
      batch.delete(favoriteUsersDoc);

      const favoriteNumDoc = db
        .collection('images')
        .doc(image.id)
        .collection(collectionName.favoriteNum)
        .doc(collectionName.favCounters);

      batch.set(
        favoriteNumDoc,
        {
          count: firebase.firestore.FieldValue.increment(-1)
        },
        {
          merge: true
        }
      );
      await batch.commit();
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
