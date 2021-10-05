import React, { useState, useEffect, useContext } from 'react';
import firebase, { db } from '../../../../firebase';

import { collectionName } from '../../../../Other/Functions/constants';
import { Image } from '../../../../Other/Model/image';
import { UserImage } from '../../../../Other/Model/userImage';
import CompDetailPicture from '../Component/detailPicture';
import { UserContext } from '../../../../Other/Context/contexts';

type DetailPictureProps = {
  image: UserImage;
  favNum: number;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image, favNum } = props;

  return <CompDetailPicture image={image} favNum={favNum} />;
};

export default DetailPicture;