import firebase from 'firebase';

export type UserImage = {
  id?: string;
  title: string;
  imageUrl: string;
  date: string;
};

export const blankUserImage: UserImage = {
  title: '無題',
  imageUrl: '',
  date: ''
};
