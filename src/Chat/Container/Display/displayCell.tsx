import React from 'react';

import { Message } from '../../../Model/message';
import CompDisplayCell from '../../Component/Display/displayCell';

type DisplayCellProps = {
  message: Message | null;
};

const DisplayCell: React.FC<DisplayCellProps> = (props: DisplayCellProps) => {
  const { message } = props;

  return <CompDisplayCell message={message} />;
};

export default DisplayCell;
