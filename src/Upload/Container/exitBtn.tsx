import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import CompExitBtn from '../Component/exitBtn';
import { setIsEntryInfo } from '../../Store/isEntry';

const ExitBtn: React.FC = () => {
  const [cfmOpen, setCfmOpen] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    setCfmOpen(true);
  }, []);

  const clickOK = useCallback(() => {
    dispatch(setIsEntryInfo({ entryState: false }));
    history.push('/');
  }, []);

  return (
    <CompExitBtn
      cfmOpen={cfmOpen}
      setCfmOpen={setCfmOpen}
      onClick={onClick}
      clickOK={clickOK}
    />
  );
};

export default ExitBtn;
