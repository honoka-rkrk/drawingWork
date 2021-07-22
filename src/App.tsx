import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import Chat from './Chat/Component/main';
import Upload from './Upload/Component/main';
import DispPicture from './DispPicture/Component/main';
import Home from './Home/Component/main';
import Header from './Header/Component/main';
import Inquiry from './Utils/Component/inquiry';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        <Route path={'/chat'} exact component={Chat} />
        <Route path={'/upload'} exact component={Upload} />
        <Route path={'/dispPicture'} exact component={DispPicture} />
        <Route path={'/inquiry'} exact component={Inquiry} />
        <Redirect to='/' />
      </Switch>
    </>
  );
};
export default App;
