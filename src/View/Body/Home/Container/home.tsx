import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { db } from '../../../../firebase';
import CompHome from '../Component/home';
import { setOpenTimeInfo } from '../../../../Other/Store/openTime';

const Home: React.FC = () => {
  const [isMax, setIsMax] = useState<boolean>(false); //参加最大人数に達しているか
  const dispatch = useDispatch();

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
            dispatch(
              setOpenTimeInfo({ hour: getData.hour, minutes: getData.minutes })
            );
          } else {
            setOpenTimeInfo({ hour: 21, minutes: 0 });
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

  useEffect(() => {
    getMember();
    getOpenTime();
  }, []);

  return <CompHome isMax={isMax} setIsMax={setIsMax} />;
};

export default Home;
