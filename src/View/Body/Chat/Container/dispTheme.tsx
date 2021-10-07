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
    const drawThemeRef = db
      .collection('drawThemes')
      .doc(moment().format('YYYYMMDD'))
      .collection('drawTheme');
    await drawThemeRef.get().then((snapshot: firebase.firestore.QuerySnapshot) => {
      snapshot.forEach((doc) => {
        if (doc.exists) {
          const getData: any = doc.data();
          console.log(getData);
          setDrawTheme(getData.drawTheme);
        } else {
          setDrawTheme('');
        }
      });
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
