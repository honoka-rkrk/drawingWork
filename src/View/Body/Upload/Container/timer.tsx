import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CompTimer from '../Component/timer';
import { setIsEntryInfo } from '../../../../Other/Store/isEntry';

type TimerProps = {
  setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const { setTimerEnd } = props;
  const [end, setEnd] = useState<Moment | null>(null);
  const [tmMinutes, setTmMinutes] = useState<string>('');
  const [tmSeconds, setTmSeconds] = useState<string>('');
  const [danger, setDanger] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const dtNow = moment().startOf('day');
    const endHour = dtNow.add(22, 'hours');
    const endTime = endHour.add(3, 'minutes');
    setEnd(endTime);
  }, [setEnd]);

  const updateTime = useCallback(async () => {
    const dtNow = moment();
    if (end) {
      const timerDiff = end.diff(dtNow, 'second');
      setTmMinutes(String(Math.floor(timerDiff / 60)));
      setTmSeconds(String(timerDiff % 60));
      if (timerDiff === 0) {
        setTimerEnd(true);
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
    dispatch(setIsEntryInfo({ entryState: false }));
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
