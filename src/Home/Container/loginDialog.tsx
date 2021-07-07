import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import firebase from 'firebase/app';
import { FirebaseContext, UserContext } from '../../Context/contexts';
import CompLoginDialog from '../Component/loginDialog';

type LoginProps = {
  open: boolean;
  onClose: () => void;
};

const LoginDialog: React.FC<LoginProps> = (props: LoginProps) => {
  const { open, onClose } = props;
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const history = useHistory();

  //react-firebaseuiのパッケージを使用、signInOptionsでプロバイダを増やせばそれに対応してログインボタンも増える。
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' }
      }
    ],
    callbacks: {
      // ログインが成功した時に呼ばれるコールバック関数。authResultにCredential情報を、
      //redirectUrlにsignInSuccessUrlというURLﾊﾟﾗﾒｰﾀで設定されていたパスを渡されるようになっている。
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        //twitterのスクリーンネームやプロフィール文が格納されたCredentialはここでしか取得できないので
        //過ぎにContextに格納する
        setCredential(authResult as firebase.auth.UserCredential);
        //trueで返すとredirectUrlにリダイレクトされ、アプリがリロードされるので、その前にreact-routerでアプリ内
        //リダイレクトを設定してfalseを返している。
        const dest = redirectUrl || '/home';
        history.replace(dest);
        return false;
      }
    }
  };
  return (
    <CompLoginDialog uiConfig={uiConfig} auth={auth} open={open} onClose={onClose} />
  );
};

export default LoginDialog;
