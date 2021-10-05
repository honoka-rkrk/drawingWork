import React from 'react';

import CompInpTitle from '../Component/inpTitle';

type InpTitleProps = {
  myFiles: File[];
  clickable: boolean;
  title: string;
  handleTitleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const InpTitle: React.FC<InpTitleProps> = (props: InpTitleProps) => {
  const { myFiles, clickable, title, handleTitleChange } = props;
  return (
    <CompInpTitle
      myFiles={myFiles}
      clickable={clickable}
      title={title}
      handleTitleChange={handleTitleChange}
    />
  );
};

export default InpTitle;
