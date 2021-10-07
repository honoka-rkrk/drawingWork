import React, { useState } from 'react';
import moment from 'moment';

import firebase, { db } from '../../../firebase';
import CompDrawThemeSet from '../Component/drawThemeSet';

const DrawThemeSet: React.FC = () => {
  const [odaiDate, setOdaiDate] = useState<Date>(new Date());
  const [drawTheme, setDrawTheme] = useState<string>('');
  const [submitError, setSubmitError] = useState<boolean>(false);

  const handleOnSubmit = () => {
    if (odaiDate && drawTheme) {
      const year = odaiDate.getFullYear().toString();
      const month = ('0' + (odaiDate.getMonth() + 1)).slice(-2);
      const day = ('0' + odaiDate.getDate()).slice(-2);
      db.collection('drawThemes')
        .doc(year + month + day)
        .set({
          drawTheme: drawTheme,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      setDrawTheme('');
      setOdaiDate(new Date());
    } else {
      setSubmitError(true);
    }
  };

  //お題の日付変更されたとき
  const handleDateChange = (date: Date) => {
    setOdaiDate(date);
  };

  //お題の内容が変更されたとき
  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSubmitError(false);
    setDrawTheme(e.target.value);
  };
  return (
    <CompDrawThemeSet
      odaiDate={odaiDate}
      handleDateChange={handleDateChange}
      handleContentChange={handleContentChange}
      submitError={submitError}
      drawTheme={drawTheme}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default DrawThemeSet;
