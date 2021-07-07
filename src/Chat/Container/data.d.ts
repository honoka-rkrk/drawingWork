import firebase from 'firebase';

export type MessageTypes = {
  messages: string;
  createdAt: firebase.firestore.Timestamp | null;
};
