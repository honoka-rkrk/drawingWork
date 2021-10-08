import React, { useState, useEffect } from 'react';

import firebase, { db } from '../../../firebase';
import CompTimeLimist from '../Component/timeLimit';

const TimeLimit: React.FC = () => {
  const [hour, setHour] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [hourItem, setHourItem] = useState<Array<string>>([]);
  const [minutesItem, setMinutesItem] = useState<Array<string>>([]);
  const [submitError, setSubmitError] = useState<boolean>(false);

  //DB登録処理
  const handleOnSubmit = () => {
    if ((hour || Number(hour) == 0) && (minutes || Number(minutes) == 0)) {
      const calcMinutes = Number(hour) * 60 + Number(minutes);
      db.collection('timeLimit').doc('timeLimitMinutes').set({
        minutes: calcMinutes,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      setHour('');
      setMinutes('');
    } else {
      setSubmitError(true);
    }
  };

  //セレクトボックスの中身の作成
  useEffect(() => {
    const newHourItem: Array<string> = Array(24).fill('0');
    newHourItem.forEach((_, index) => {
      newHourItem[index] = index.toString();
    });
    setHourItem(newHourItem);
    const newMinutesItem: Array<string> = Array(60).fill('0');
    newMinutesItem.forEach((_, index) => {
      newMinutesItem[index] = index.toString();
    });
    setMinutesItem(newMinutesItem);
  }, []);

  //セレクトボックス時間選択時
  const handleHourChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setHour(event.target.value as string);
  };

  //セレクトボックス分選択時
  const handleMinutesChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setMinutes(event.target.value as string);
  };

  return (
    <CompTimeLimist
      hour={hour}
      minutes={minutes}
      handleHourChange={handleHourChange}
      handleMinutesChange={handleMinutesChange}
      hourItem={hourItem}
      minutesItem={minutesItem}
      submitError={submitError}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default TimeLimit;
