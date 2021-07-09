import React, { useState, useEffect } from 'react';

import CompDispTheme from '../Component/dipTheme';

const DispTheme: React.FC = () => {
  const [drawTheme, setDrawTheme] = useState<string>('');

  useEffect(() => {
    setDrawTheme('準備中');
  }, []);
  return <CompDispTheme drawTheme={drawTheme} />;
};

export default DispTheme;
