import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { db } from '../../../../firebase';
import CompHome from '../Component/home';
import { setOpenTimeInfo } from '../../../../Other/Store/openTime';
import { setTimeLimitInfo } from '../../../../Other/Store/timeLimit';

const Home: React.FC = () => {
  const [isMax, setIsMax] = useState<boolean>(false); //参加最大人数に達しているか
  const dispatch = useDispatch();
  const [nextHour, setNextHour] = useState<number>(0);
  const [nextMinutes, setNextMinutes] = useState<number>(0);

  //firestoreから現在参加している人数を取得する
  const getMember = async () => {
    let unmounted = false;
    const entoryMembersRef = db
      .collection('entryMembers')
      .doc(moment().format('YYYYMMDD'));
    await entoryMembersRef
      .get()
      .then((doc) => {
        if (!unmounted) {
          if (doc.exists) {
            const getData: any = doc.data();
            //既に参加最大人数に達しているとき
            if (getData.maximum) {
              setIsMax(true);
            } else {
              setIsMax(false);
            }
          } else {
            //まだ一人も参加していないとき
            setIsMax(false);
          }
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });
    return () => {
      unmounted = true;
    };
  };

  //firestoreから開始時刻を取得する
  const getOpenTime = async () => {
    let unmounted = false;
    const openTimeRef = db.collection('openTimes').doc(moment().format('YYYYMMDD'));
    await openTimeRef
      .get()
      .then((doc) => {
        if (!unmounted) {
          if (doc.exists) {
            const getData: any = doc.data();
            console.log(getData);
            dispatch(
              setOpenTimeInfo({ hour: getData.hour, minutes: getData.minutes })
            );
          } else {
            dispatch(setOpenTimeInfo({ hour: 21, minutes: 0 }));
          }
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });
    return () => {
      unmounted = true;
    };
  };

  //firestoreから明日の開始時刻を取得する
  const getTommorowOpenTime = async () => {
    let unmounted = false;
    const openTimeRef = db
      .collection('openTimes')
      .doc(moment().add(1, 'day').format('YYYYMMDD'));
    await openTimeRef
      .get()
      .then((doc) => {
        if (!unmounted) {
          if (doc.exists) {
            const getData: any = doc.data();
            setNextHour(getData.hour);
            setNextMinutes(getData.minutes);
          } else {
            setNextHour(21);
            setNextMinutes(0);
          }
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });
    return () => {
      unmounted = true;
    };
  };

  //firestoreから制限時間を取得する
  const getTimeLimit = async () => {
    const messagesRef = db.collection('timeLimit').doc('timeLimitMinutes');
    await messagesRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          const getData: any = doc.data();
          dispatch(setTimeLimitInfo({ minutes: getData.minutes }));
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });
  };

  useEffect(() => {
    getMember();
    getOpenTime();
    getTommorowOpenTime();
    getTimeLimit();
  }, []);

  return (
    <CompHome
      isMax={isMax}
      setIsMax={setIsMax}
      nextHour={nextHour}
      nextMinutes={nextMinutes}
    />
  );
};

export default Home;
