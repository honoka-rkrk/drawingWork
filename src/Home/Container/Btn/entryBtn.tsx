import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { db } from '../../../firebase';

import CompEntryBtn from '../../Component/Btn/entryBtn';

type EntryBtnProps = {
  isMax: boolean;
  setIsMax: React.Dispatch<React.SetStateAction<boolean>>;
};

const EntryBtn: React.FC<EntryBtnProps> = (props: EntryBtnProps) => {
  const { isMax, setIsMax } = props;
  const [infOpen, setInfOpen] = useState<boolean>(false);
  const history = useHistory();

  const doneEntry = (numbers: number) => {
    if (numbers === 20) {
      db.collection('entryMembers')
        .doc('entryNumber')
        .set({
          numbers: numbers + 1,
          maximum: true
        });
    } else {
      db.collection('entryMembers')
        .doc('entryNumber')
        .set({
          numbers: numbers + 1,
          maximum: false
        });
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
            doneEntry(getData.numbers);
            history.push('/chat');
          } else {
            if (!unmounted) {
              setInfOpen(true);
              setIsMax(true);
            }
          }
        } else {
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
    />
  );
};

export default EntryBtn;
