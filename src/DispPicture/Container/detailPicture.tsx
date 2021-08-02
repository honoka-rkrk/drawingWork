import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
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
  const [favCount, setFavCount] = useState<number>(0);
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
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
        .doc(image.id)
        .collection(collectionName.favoriteUsers)
        .doc(user.screenName);

      batch.set(favoriteUsersDoc, {
        user: user.displayName
      });

      //全てのいいねの数をカウント
      const favoriteNumDoc = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
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
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
        .doc(image.id)
        .collection(collectionName.favoriteUsers)
        .doc(user.screenName);
      batch.delete(favoriteUsersDoc);

      const favoriteNumDoc = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
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
    let id: number;
    let unmounted = false;
    const getFavCounts = async () => {
      const favCountsRef = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
        .doc(image.id)
        .collection(collectionName.favoriteNum)
        .doc('favCounters');
      await favCountsRef
        .get()
        .then((doc) => {
          const getData: any = doc.data();
          if (!unmounted) {
            if (getData) {
              setFavCount(getData.count);
            } else {
              setFavCount(0);
            }
          }
        })
        .catch((error) => {
          console.log('Error getting document', error);
        });
    };
    const timer = () => {
      getFavCounts();
      return window.setTimeout(() => {
        id = timer();
      }, 5000);
    };
    id = timer();
    return () => {
      unmounted = true;
      clearTimeout(id);
    };
  }, [setFavCount]);

  //いいねできる数の制限がきたら他のボタンを押せなくする
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
      favCount={favCount}
    />
  );
};

export default DetailPicture;
