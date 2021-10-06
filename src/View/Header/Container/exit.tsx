import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import CompExit from '../Component/exit';
import { setIsEntryInfo } from '../../../Other/Store/isEntry';

const Exit: React.FC = () => {
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
    <CompExit
      cfmOpen={cfmOpen}
      setCfmOpen={setCfmOpen}
      onClick={onClick}
      clickOK={clickOK}
    />
  );
};

export default Exit;
