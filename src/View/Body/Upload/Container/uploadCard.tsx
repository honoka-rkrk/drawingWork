import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import CompUploadCard from '../Component/uploadCard';

type UploadCardProps = {
  myFiles: File[];
  setMyFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setClickable: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  subHeader: string;
};

const UploadCard: React.FC<UploadCardProps> = (props: UploadCardProps) => {
  const { myFiles, setMyFiles, setClickable, header, subHeader } = props;
  const [src, setSrc] = useState('');

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
    accept: ['image/Jpeg', 'image/Jpg', 'image/Png'],
    onDrop,
    onDropRejected
  });

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
      header={header}
      subHeader={subHeader}
    />
  );
};

export default UploadCard;
