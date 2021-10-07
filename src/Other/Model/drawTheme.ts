import firebase from 'firebase';

export type DrawTheme = {
  id?: string;
  drawTheme: string;
  createdAt: firebase.firestore.Timestamp | null;
};

export const blankDrawTheme: DrawTheme = {
  drawTheme: '',
  createdAt: null
};
