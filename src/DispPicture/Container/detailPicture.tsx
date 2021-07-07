import React, { useState } from 'react';

import { Image } from '../../Model/image';
import CompDetailPicture from '../Component/detailPicture';

type DetailPictureProps = {
  image: Image;
};
const DetailPicture: React.FC<DetailPictureProps> = (props: DetailPictureProps) => {
  const { image } = props;
  const [isFav, setIsFav] = useState<boolean>(false);

  const handleFavClick = () => {
    setIsFav(true);
  };

  return <CompDetailPicture image={image} />;
};

export default DetailPicture;
