import React from 'react';
import Typography from '@material-ui/core/Typography';

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
      <>
        {arrText.map((item, index) => (
          <Typography key={`msgElm_${index}`} component={'div'}>
            {item}
          </Typography>
        ))}
      </>
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
