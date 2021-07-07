import React from 'react';

import { Image } from '../../Model/image';
import CompDetailPicture from '../Component/detailPicture';

type DetailPictureProps = {
  image: Image;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image } = props;

  return <CompDetailPicture image={image} />;
};

export default DetailPicture;
