import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import firebase, { db } from '../../../firebase';
import { UserContext } from '../../../Context/contexts';
import CompEntryBtn from '../../Component/Btn/entryBtn';
import { setIsEntryInfo } from '../../../Store/isEntry';

type EntryBtnProps = {
  isMax: boolean;
  setIsMax: React.Dispatch<React.SetStateAction<boolean>>;
};

const EntryBtn: React.FC<EntryBtnProps> = (props: EntryBtnProps) => {
  const { isMax, setIsMax } = props;
  const [infOpen, setInfOpen] = useState<boolean>(false);
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const nowTime = moment();
    const startTime = moment().startOf('day').add(20, 'hours').add(55, 'minutes');
    const timerDiff = startTime.diff(nowTime, 'minutes');
    if (timerDiff > 0) {
      setOpen(false);
    } else if (timerDiff < -15) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [setOpen]);

  useEffect(() => {
    if (user) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  const doneEntry = async (numbers: number) => {
    if (numbers === 20) {
      await db
        .collection('entryMembers')
        .doc('entryNumber')
        .set({
          numbers: firebase.firestore.FieldValue.increment(1),
          maximum: true
        });
    } else {
      await db
        .collection('entryMembers')
        .doc('entryNumber')
        .set(
          {
            numbers: firebase.firestore.FieldValue.increment(1),
            maximum: false
          },
          { merge: true }
        );
    }
  };

  const getMember = async () => {
    let unmounted = false;
    const entoryMembersRef = db.collection('entryMembers').doc('entryNumber');
    await entoryMembersRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const getData: any = doc.data();
          if (!getData.maximum) {
            dispatch(setIsEntryInfo({ entryState: true }));
            doneEntry(getData.numbers);
            history.push('/chat');
          } else {
            if (!unmounted) {
              setInfOpen(true);
              setIsMax(true);
            }
          }
        } else {
          dispatch(setIsEntryInfo({ entryState: true }));
          doneEntry(0);
          history.push('/chat');
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });

    return () => {
      unmounted = true;
    };
  };

  const entryClick = useCallback(() => {
    getMember();
  }, []);

  return (
    <CompEntryBtn
      infOpen={infOpen}
      setInfOpen={setInfOpen}
      entryClick={entryClick}
      isMax={isMax}
      disabled={disabled}
      open={open}
    />
  );
};

export default EntryBtn;
