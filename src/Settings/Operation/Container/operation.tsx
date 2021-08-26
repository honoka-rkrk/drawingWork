import React, { useState } from 'react';

import CompOperation from '../Component/operation';
const Operation: React.FC = () => {
  const [odaiDate, setOdaiDate] = useState<Date>(new Date());
  //プロジェクトの期限が変更されたとき
  const handleDeadlineChange = (date: Date) => {
    setOdaiDate(date);
  };
  return (
    <CompOperation odaiDate={odaiDate} handleDeadlineChange={handleDeadlineChange} />
  );
};

export default Operation;
