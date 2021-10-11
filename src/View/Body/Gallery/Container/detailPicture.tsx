import React from 'react';

import { UserImage } from '../../../../Other/Model/userImage';
import CompDetailPicture from '../Component/detailPicture';

type DetailPictureProps = {
  image: UserImage;
  favNum: number;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image, favNum } = props;

  return <CompDetailPicture image={image} favNum={favNum} />;
};

export default DetailPicture;
