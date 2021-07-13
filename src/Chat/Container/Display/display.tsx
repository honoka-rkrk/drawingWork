import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import firebase from 'firebase';
import { Message } from '../../../Model/message';

import CompDisplay from '../../Component/Display/display';

const Display: React.FC = () => {
  const [messages, setMessages] = useState<Array<Message> | null>(null);

  useEffect(() => {
    let id: number;
    let unmounted = false;
    const getMessage = async () => {
      const messagesRef = db.collection('messages');
      await messagesRef
        .orderBy('createdAt', 'desc')
        .limit(15)
        .get()
        .then((snapshot: firebase.firestore.QuerySnapshot) => {
          const newMessages: any[] = [];
          snapshot.forEach((doc) => {
            newMessages.push({
              ...doc.data()
            });
          });
          if (!unmounted) setMessages(newMessages.reverse());
        });
    };
    const timer = () => {
      getMessage();
      return window.setTimeout(() => {
        id = timer();
      }, 1000);
    };
    id = timer();
    return () => {
      unmounted = true;
      clearTimeout(id);
    };
  }, [setMessages]);

  return <CompDisplay messages={messages} />;
};

export default Display;
