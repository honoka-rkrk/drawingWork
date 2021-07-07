import React from 'react';
import Box from '@material-ui/core/Box';

import CompCfmDialog from '../../Component/Dialog/cfmDialog';

type CfmDialogProps = {
  cfmOpen: boolean;
  title: string;
  msg: string;
  clickOK: () => void;
  clickNG: () => void;
  txtOK?: string;
  txtNG?: string;
};

const CfmDialog: React.FC<CfmDialogProps> = (props: CfmDialogProps) => {
  const { cfmOpen, title, msg, clickOK, clickNG, txtOK, txtNG } = props;

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
    <CompCfmDialog
      cfmOpen={cfmOpen}
      title={title}
      msgElm={msgElm(msg)}
      clickOK={clickOK}
      clickNG={clickNG}
      txtOK={txtOK}
      txtNG={txtNG}
    />
  );
};

export default CfmDialog;
