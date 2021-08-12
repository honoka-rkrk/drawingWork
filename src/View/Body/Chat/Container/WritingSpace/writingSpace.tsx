import React, { useState, useContext } from 'react';
import moment from 'moment';

import CompWritingSpace from '../../Component/WritingSpace/writingSpace';
import firebase, { db } from '../../../../../firebase';
import { UserContext } from '../../../../../Other/Context/contexts';

const WritingSpace: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [submitError, setSubmitError] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  const handleOnSubmit = () => {
    if (message !== '' && user) {
      db.collection('messages')
        .doc(moment().format('YYYYMMDD'))
        .collection('dayMessages')
        .doc()
        .set({
          message: message,
          displayName: user.displayName,
          screenName: user.screenName,
          photoUrl: user.photoUrl,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      setMessage('');
    } else {
      setSubmitError(true);
    }
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSubmitError(false);
    setMessage(e.target.value);
  };

  return (
    <CompWritingSpace
      handleContentChange={handleContentChange}
      submitError={submitError}
      message={message}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default WritingSpace;
