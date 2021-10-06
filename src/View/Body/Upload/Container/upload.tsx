import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import firebase, { storage, db } from '../../../../firebase';
import moment from 'moment';

import { collectionName } from '../../../../Other/Functions/constants';
import CompUpload from '../Component/upload';
import { UserContext } from '../../../../Other/Context/contexts';

const Upload: React.FC = () => {
  const [timerEnd, setTimerEnd] = useState<boolean>(false);
  const [isUpd, setIsUpd] = useState<boolean>(false);
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [title, setTitle] = useState<string>('無題');
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [header, setHeader] = useState<string>('画像をアップロードしてください');
  const [subHeader, setSubHeader] = useState<string>(
    'ファイルの種類は「Jpeg」「Jpg」「Png」にしてください。'
  );

  useEffect(() => {
    if (timerEnd && isUpd) {
      history.push('/dispPicture');
    }
  });

  //タイトルが変更されたとき
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTitle(e.target.value);
  };

  const handleUpload = async (accepterdImg: any) => {
    try {
      //アップロード処理
      const storageRef = storage.ref(`/images/${myFiles[0].name}`);
      const uploadTask: any = storageRef.put(myFiles[0]);
      setClickable(false);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, next, error);
    } catch (error) {
      console.log('エラーキャッチ', error);
    }
  };

  const postUrl = async () => {
    const url = await storage.ref(`/images/${myFiles[0].name}`).getDownloadURL();
    if (url !== '' && user) {
      const batch = db.batch();
      //日付ごとのイメージフォルダに入れる
      const dayImages = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
        .doc(user.screenName);
      batch.set(dayImages, {
        title: title,
        imageUrl: url,
        screenName: user.screenName,
        displayName: user.displayName,
        iconUrl: user.photoUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      //カウントをデフォルトで入れる
      const dayImagesCount = db
        .collection('images')
        .doc(moment().format('YYYYMMDD'))
        .collection('image')
        .doc(user.screenName)
        .collection(collectionName.favoriteNum)
        .doc(collectionName.favCounters);
      batch.set(dayImagesCount, {
        count: 0
      });

      //ユーザのイメージフォルダに入れる
      const userImages = db
        .collection('users')
        .doc(user.id)
        .collection('images')
        .doc();

      batch.set(userImages, {
        title: title,
        imageUrl: url,
        date: moment().format('YYYYMMDD')
      });
      await batch.commit();
    }
  };

  const next = (snapshot: { bytesTransferred: number; totalBytes: number }) => {
    //進行中のsnapshotを得る
    //アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if (percent === 100) {
      setTimeout(postUrl, 2000);
      setClickable(false);
      setIsUpd(true);
      setHeader('画像がアップロードできました！');
      setSubHeader(
        '制限時間が終わると自動的に閲覧画面に移動します。制限時間が終わるまで今しばらくお待ちください。'
      );
    }
  };

  const error = (error: any) => {
    alert(error);
  };

  return (
    <CompUpload
      setTimerEnd={setTimerEnd}
      myFiles={myFiles}
      setMyFiles={setMyFiles}
      clickable={clickable}
      setClickable={setClickable}
      title={title}
      handleTitleChange={handleTitleChange}
      handleUpload={handleUpload}
      header={header}
      subHeader={subHeader}
    />
  );
};

export default Upload;
