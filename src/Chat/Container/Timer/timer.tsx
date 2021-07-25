import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';
import { useHistory } from 'react-router-dom';

import CompTimer from '../../Component/Timer/timer';

type TimerProps = {
  isStart: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const { isStart, setIsStart } = props;
  const [end, setEnd] = useState<Moment | null>(null);
  const [tmMinutes, setTmMinutes] = useState<string>('');
  const [tmSeconds, setTmSeconds] = useState<string>('');
  const [danger, setDanger] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [start, setStart] = useState<Moment | null>(null);
  const history = useHistory();

  //初期設定
  useEffect(() => {
    const now = moment();
    const dtNow = moment().startOf('day');
    const startTime = dtNow.add(21, 'hours');
    if (now > startTime) {
      setIsStart(true);
    }
  }, []);

  //21時からのタイマー
  useEffect(() => {
    if (!isStart) {
      const dtNow = moment().startOf('day');
      const startTime = dtNow.add(21, 'hours');
      setStart(startTime);
    }
  }, [start]);

  const updateStartTime = useCallback(async () => {
    if (!isStart) {
      const dtNow = moment();
      if (start) {
        const timerDiff = start.diff(dtNow, 'second');
        setTmMinutes(String(Math.floor(timerDiff / 60)));
        setTmSeconds(String(timerDiff % 60));
        if (timerDiff === 0) {
          setIsStart(true);
        }
      }
    }
  }, [start]);

  useEffect(() => {
    if (!isStart) {
      const updateTimeId = setInterval(updateTime, 500);
      updateStartTime();
      return () => {
        clearInterval(updateTimeId);
      };
    } else {
      return;
    }
  }, [updateStartTime, isStart]);

  //21時からのタイマー
  useEffect(() => {
    if (isStart) {
      const dtNow = moment().startOf('day');
      const endTime = dtNow.add(22, 'hours');
      setEnd(endTime);
    }
  }, [setEnd, isStart]);

  const updateTime = useCallback(async () => {
    if (isStart) {
      const dtNow = moment();
      if (end) {
        console.log(end);
        const timerDiff = end.diff(dtNow, 'second');
        setTmMinutes(String(Math.floor(timerDiff / 60)));
        setTmSeconds(String(timerDiff % 60));
        if (timerDiff === 0) {
          setIsEnd(true);
        }
        if (Math.floor(timerDiff / 60) <= 5) {
          setDanger(true);
        }
      }
    }
  }, [end, isStart]);

  useEffect(() => {
    if (isStart) {
      if (!isEnd) {
        const updateTimeId = setInterval(updateTime, 500);
        updateTime();
        return () => {
          clearInterval(updateTimeId);
        };
      } else {
        return;
      }
    }
  }, [updateTime, isEnd, isStart]);

  const clickOK = useCallback(() => {
    history.push('/upload');
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
