import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import Chat from './Chat/Component/main';
import Upload from './Upload/Component/main';
import Home from './Home/Component/main';
import Header from './Header/Component/main';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        <Route path={'/chat'} exact component={Chat} />
        <Route path={'/upload'} exact component={Upload} />
        <Redirect to='/' />
      </Switch>
    </>
  );
};
export default App;
