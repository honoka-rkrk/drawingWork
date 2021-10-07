import React, { useState, useEffect } from 'react';

import firebase, { db } from '../../../firebase';
import CompOpenTimeSet from '../Component/openTimeSet';

const OpenTimeSet: React.FC = () => {
  const [openTimeDate, setOpenTimeDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [hourItem, setHourItem] = useState<Array<string>>([]);
  const [minutesItem, setMinutesItem] = useState<Array<string>>([]);
  const [submitError, setSubmitError] = useState<boolean>(false);

  //DB登録処理
  const handleOnSubmit = () => {
    if (hour && minutes && openTimeDate) {
      const year = openTimeDate.getFullYear().toString();
      const month = ('0' + (openTimeDate.getMonth() + 1)).slice(-2);
      const day = ('0' + openTimeDate.getDate()).slice(-2);
      db.collection('openTimes')
        .doc(year + month + day)
        .set({
          hour: hour,
          minutes: minutes,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      setHour('');
      setMinutes('');
      setOpenTimeDate(new Date());
    } else {
      console.log('err');
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

  //開催時間の日付変更されたとき
  const handleDateChange = (date: Date) => {
    setOpenTimeDate(date);
  };

  return (
    <CompOpenTimeSet
      openTimeDate={openTimeDate}
      handleDateChange={handleDateChange}
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

export default OpenTimeSet;
