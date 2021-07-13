import firebase from 'firebase';

export type Message = {
  id?: string;
  message: string;
  displayName: string | null;
  screenName: string;
  photoUrl: string | null;
  createdAt: firebase.firestore.Timestamp | null;
};

export const blankMessage: Message = {
  message: '',
  displayName: null,
  screenName: '',
  photoUrl: null,
  createdAt: null
};
