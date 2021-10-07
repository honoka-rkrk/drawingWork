import firebase from 'firebase';

export type OpenTime = {
  id?: string;
  hour: string;
  minutes: string | null;
  createdAt: firebase.firestore.Timestamp | null;
};

export const blankOpenTime: OpenTime = {
  hour: '0',
  minutes: '0',
  createdAt: null
};
