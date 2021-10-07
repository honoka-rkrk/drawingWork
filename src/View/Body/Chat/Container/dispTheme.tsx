import React, { useState, useEffect, useCallback } from 'react';

import moment from 'moment';
import { db } from '../../../../firebase';
import firebase from 'firebase';
import { DrawTheme } from '../../../../Other/Model/drawTheme';

import CompDispTheme from '../Component/dipTheme';

type DispThemeProps = {
  isStart: boolean;
};

const DispTheme: React.FC<DispThemeProps> = (props: DispThemeProps) => {
  const { isStart } = props;
  const [drawTheme, setDrawTheme] = useState<string>('');

  const getTheme = useCallback(async () => {
    const unmounted = false;
    const drawThemeRef = db
      .collection('drawThemes')
      .doc(moment().format('YYYYMMDD'));
    await drawThemeRef.get().then((doc) => {
      if (!unmounted) {
        if (doc.exists) {
          const getData: any = doc.data();
          setDrawTheme(getData.drawTheme);
        } else {
          setDrawTheme('準備中');
        }
      }
    });
  }, [db, setDrawTheme]);

  useEffect(() => {
    if (!isStart) {
      setDrawTheme('準備中');
    } else {
      getTheme();
    }
  }, [isStart]);
  return <CompDispTheme drawTheme={drawTheme} />;
};

export default DispTheme;
