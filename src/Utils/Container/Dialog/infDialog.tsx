import React from 'react';
import Box from '@material-ui/core/Box';

import CompInfDialog from '../../Component/Dialog/infDialog';

type InfDialogProps = {
  infOpen: boolean;
  title: string;
  msg: string;
  clickOK: () => void;
  txtOK?: string;
};

const InfDialog: React.FC<InfDialogProps> = (props: InfDialogProps) => {
  const { infOpen, title, msg, clickOK, txtOK } = props;

  const msgElm = (_msg: string) => {
    const arrText = _msg.split('\n');
    return (
      <Box>
        {arrText.map((item, index) => (
          <Box key={`msgElm_${index}`}>{item}</Box>
        ))}
      </Box>
    );
  };

  return (
    <CompInfDialog
      infOpen={infOpen}
      title={title}
      msgElm={msgElm(msg)}
      clickOK={clickOK}
      txtOK={txtOK}
    />
  );
};

export default InfDialog;
