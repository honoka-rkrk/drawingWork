import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import firebase, { storage } from '../../firebase';
import CompUploadCard from '../Component/uploadCard';
import { UserContext } from '../../Context/contexts';
import { db } from '../../firebase';

const UploadCard: React.FC = () => {
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState<string>('無題');
  const [imageUrl, setImageUrl] = useState<string>('');
  const { user } = useContext(UserContext);

  //タイトルが変更されたとき
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTitle(e.target.value);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    try {
      setMyFiles([...acceptedFiles]);
      setClickable(true);
      handlePreview(acceptedFiles);
    } catch (error) {
      alert(error);
    }
  }, []);

  const onDropRejected = () => {
    alert('画像のみ受け付けることができます。');
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected
  });

  const handleUpload = async (accepterdImg: any) => {
    try {
      //アップロード処理
      const storageRef = storage.ref(`/images/${myFiles[0].name}`);
      const uploadTask: any = storageRef.put(myFiles[0]);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, next, error);
    } catch (error) {
      console.log('エラーキャッチ', error);
    }
  };

  const postUrl = async () => {
    const url = await storage.ref(`/images/${myFiles[0].name}`).getDownloadURL();
    if (url !== '' && user) {
      console.log(String(url));
      console.log(title);
      console.log(user.screenName);
      console.log(user.displayName);
      db.collection('images')
        .doc()
        .set({
          title: title,
          imageUrl: String(url),
          screenName: user.screenName,
          dislaypName: user.displayName,
          createdAt: new Date()
        });
    }
  };

  const next = (snapshot: { bytesTransferred: number; totalBytes: number }) => {
    //進行中のsnapshotを得る
    //アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + '% done');
    console.log(snapshot);
    if (percent === 100) {
      postUrl();
    }
  };

  const error = (error: any) => {
    alert(error);
  };

  const handlePreview = (files: any) => {
    if (files === null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  return (
    <CompUploadCard
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      myFiles={myFiles}
      src={src}
      clickable={clickable}
      handleUpload={handleUpload}
      title={title}
      handleTitleChange={handleTitleChange}
    />
  );
};

export default UploadCard;
