import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Home/Component/main';
import Header from './Header/Component/main';
import Inquiry from './Utils/Component/inquiry';
import Gallery from './Gallery/Component/main';
import { RootState } from './Store/rootReducer';
import { routes, RouteProps } from './Route/route';

import Upload from './Upload/Component/main';

const App: React.FC = () => {
  const isEntryInfo = useSelector((state: RootState) => state.isEntry.isEntryInfo);

  return (
    <>
      <CssBaseline />
      <Header />
      {isEntryInfo && isEntryInfo.entryState ? <EntryRoute /> : <NotEntryRoute />}
    </>
  );
};

const EntryRoute: React.FC = () => {
  console.log('entry');
  return (
    <Switch>
      {routes.map((config: RouteProps) => (
        <Route key={`route_${config.path}`} {...config} />
      ))}
    </Switch>
  );
};

const NotEntryRoute: React.FC = () => {
  return (
    <Switch>
      <Route path={['/', '/home']} exact component={Home} />
      <Route path={'/upload'} component={Upload} />
      <Route path={'/gallery'} component={Gallery} />
      <Route path={'/inquiry'} component={Inquiry} />
      <Redirect to='/' />
    </Switch>
  );
};
export default App;
