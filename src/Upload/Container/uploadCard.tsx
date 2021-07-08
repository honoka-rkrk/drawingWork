import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import firebase, { storage, db } from '../../firebase';
import CompUploadCard from '../Component/uploadCard';
import { UserContext } from '../../Context/contexts';
import { collectionName } from '../../Functions/constants';
import { doc } from 'prettier';

type UploadCardProps = {
  setIsUpd: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadCard: React.FC<UploadCardProps> = (props: UploadCardProps) => {
  const { setIsUpd } = props;
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState<string>('無題');
  const { user } = useContext(UserContext);
  const [header, setHeader] = useState<string>('画像をアップロードしてください');
  const [subHeader, setSubHeader] = useState<string>(
    'ファイルの種類は「Jpeg」「Jpg」「Png」にしてください。'
  );
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
      db.collection('images').doc().set({
        title: title,
        imageUrl: url,
        screenName: user.screenName,
        displayName: user.displayName,
        iconUrl: user.photoUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log(url);
    }
    console.log(title);
    console.log(user?.screenName);
    console.log(user?.displayName);
    console.log(user?.photoUrl);
    console.log(firebase.firestore.FieldValue.serverTimestamp());
  };

  const next = (snapshot: { bytesTransferred: number; totalBytes: number }) => {
    //進行中のsnapshotを得る
    //アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + '% done');
    console.log(snapshot);
    if (percent === 100) {
      postUrl();
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
      header={header}
      subHeader={subHeader}
    />
  );
};

export default UploadCard;
