import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Other/Store/rootReducer';
import CompTimer from '../Component/timer';

const Timer: React.FC = () => {
  const [end, setEnd] = useState<Moment | null>(null);
  const [tmMinutes, setTmMinutes] = useState<string>('');
  const [tmSeconds, setTmSeconds] = useState<string>('');
  const [danger, setDanger] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const history = useHistory();
  const openTimeInfo = useSelector(
    (state: RootState) => state.openTime.openTimeInfo
  );
  const timeLimitInfo = useSelector(
    (state: RootState) => state.timeLimit.timeLimitInfo
  );

  useEffect(() => {
    const dtNow = moment().startOf('day');
    const endHour = dtNow
      .add(openTimeInfo.hour, 'hours')
      .add(openTimeInfo.minutes, 'minutes')
      .add(timeLimitInfo.minutes);
    const endTime = endHour.add(6, 'minutes');
    setEnd(endTime);
  }, [setEnd, openTimeInfo, timeLimitInfo]);

  const updateTime = useCallback(async () => {
    const dtNow = moment();
    if (end) {
      const timerDiff = end.diff(dtNow, 'second');
      setTmMinutes(String(Math.floor(timerDiff / 60)));
      setTmSeconds(String(timerDiff % 60));
      if (timerDiff === 0) {
        setIsEnd(true);
      }
      if (Math.floor(timerDiff / 60) < 1) {
        setDanger(true);
      }
    }
  }, [end]);

  useEffect(() => {
    if (!isEnd) {
      const updateTimeId = setInterval(updateTime, 500);
      updateTime();
      return () => {
        clearInterval(updateTimeId);
      };
    } else {
      return;
    }
  }, [updateTime, isEnd]);

  const clickOK = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <CompTimer
      tmMinutes={tmMinutes}
      tmSeconds={tmSeconds}
      danger={danger}
      isEnd={isEnd}
      clickOK={clickOK}
    />
  );
};

export default Timer;
