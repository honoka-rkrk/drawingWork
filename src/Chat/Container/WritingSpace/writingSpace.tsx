import React, { useState } from 'react';
import CompWritingSpace from '../../Component/WritingSpace/writingSpace';
import firebase, { db } from '../../../firebase';

const WritingSpace: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [submitError, setSubmitError] = useState<boolean>(false);

  const handleOnSubmit = () => {
    if (message !== '') {
      db.collection('message').doc().set({
        messages: message,
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
