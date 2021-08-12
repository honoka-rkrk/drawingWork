import React, { useState, useEffect } from 'react';

import CompDispTheme from '../Component/dipTheme';

type DispThemeProps = {
  isStart: boolean;
};

const DispTheme: React.FC<DispThemeProps> = (props: DispThemeProps) => {
  const { isStart } = props;
  const [drawTheme, setDrawTheme] = useState<string>('');

  useEffect(() => {
    if (!isStart) {
      setDrawTheme('準備中');
    } else {
      setDrawTheme('夏と高校生');
    }
  }, [isStart]);
  return <CompDispTheme drawTheme={drawTheme} />;
};

export default DispTheme;
