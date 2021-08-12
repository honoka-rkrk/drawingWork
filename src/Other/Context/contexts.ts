/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';
import { createContext } from 'react';

import { User } from '../Model/user';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null
});

//ログインしたユーザーの情報を格納しておくもの。
//TwitterのスクリーンネームやユーザーID(19桁の数字)、プロフィール文といった情報はCredentialからしか取得できないので、それを
//取りまわすためにcredentialとそのセッター関数のsetCredentialを要素に追加している。
type UserContextValue = {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined
});
