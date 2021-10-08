import React, { useState, useEffect } from 'react';

import firebase, { db } from '../../../firebase';
import CompPeopleLimit from '../Component/peopleLimit';

const PeopleLimit: React.FC = () => {
  const [limit, setLimit] = useState<string>('');
  const [limitItem, setLimitItem] = useState<Array<string>>([]);
  const [submitError, setSubmitError] = useState<boolean>(false);

  //DB登録処理
  const handleOnSubmit = () => {
    if (limit) {
      db.collection('peopleLimits')
        .doc('peopleLimit')
        .set({
          peopleLimit: Number(limit),
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      setLimit('');
    } else {
      setSubmitError(true);
    }
  };

  //セレクトボックスの中身の作成
  useEffect(() => {
    const newLimitItem: Array<string> = Array(21).fill('0');
    newLimitItem.forEach((_, index) => {
      newLimitItem[index] = (index * 5).toString();
    });
    setLimitItem(newLimitItem);
  }, []);

  //セレクトボックス選択時
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setLimit(event.target.value as string);
  };

  return (
    <CompPeopleLimit
      limit={limit}
      handleChange={handleChange}
      limitItem={limitItem}
      submitError={submitError}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default PeopleLimit;
