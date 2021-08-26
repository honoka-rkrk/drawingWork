import React, { useEffect, useState, useCallback, useContext } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import firebase, { db } from '../../../firebase';
import CompLogin from '../Component/login';
import { Author } from '../../../Other/Model/author';
import { UserContext } from '../../../Other/Context/contexts';
import { setIsAuthorInfo } from '../../../Other/Store/isAuthor';

const Login: React.FC = () => {
  const [isAuthor, setIsAuthor] = useState<boolean>(false); //管理者か
  const [password, setPassword] = useState<string>('');
  const [authors, setAuthors] = useState<Array<Author> | null>(null);
  const { user } = useContext(UserContext);
  const history = useHistory();
  const dispatch = useDispatch();

  //firestoreから管理者のIDとパスワードを取得
  useEffect(() => {
    let unmounted = false;
    const getAuthors = async () => {
      const imagesRef = db.collection('author');
      await imagesRef.get().then((snapshot: firebase.firestore.QuerySnapshot) => {
        const newAuthors: any[] = [];
        snapshot.forEach((doc) => {
          newAuthors.push({
            id: doc.id,
            ...doc.data()
          });
        });
        if (!unmounted) setAuthors(newAuthors);
      });
    };
    getAuthors();
    return () => {
      unmounted = true;
    };
  }, []);

  const loginClick = useCallback(() => {
    if (user && authors) {
      authors.map((item) => {
        if (item.authorId === user.id && item.password === password) {
          dispatch(setIsAuthorInfo({ authorState: true }));
          history.push('/operation');
        }
      });
    }
  }, [user, authors, password]);

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  return (
    <CompLogin
      handleContentChange={handleContentChange}
      password={password}
      loginClick={loginClick}
    />
  );
};

export default Login;
