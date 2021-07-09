import firebase from 'firebase';

export type Message = {
  id?: string;
  messages: string;
  displayName: string | null;
  screenName: string;
  photoUrl: string | null;
  createdAt: firebase.firestore.Timestamp | null;
};

export const blankMessage: Message = {
  messages: '',
  displayName: null,
  screenName: '',
  photoUrl: null,
  createdAt: null
};
