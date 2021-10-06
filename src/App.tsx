import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './View/Body/Home/Component/main';
import Login from './View/Body/Login/Component/main';
import Header from './View/Header/Component/main';
import Inquiry from './Other/Utils/Component/inquiry';
import Gallery from './View/Body/Gallery/Component/main';
import { RootState } from './Other/Store/rootReducer';
import { routes, RouteProps } from './Other/Route/route';
import Upload from './View/Body/Upload/Component/main';
import Settings from './Settings/Login/Component/main';
import DispPicture from './View/Body/DispPicture/Component/main';

import Operation from './Settings/Operation/Component/main';

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
  return (
    <Switch>
      {routes.map((config: RouteProps) => (
        <Route key={`route_${config.path}`} {...config} />
      ))}
    </Switch>
  );
};

const NotEntryRoute: React.FC = () => {
  const isAuthorInfo = useSelector(
    (state: RootState) => state.isAuthor.isAuthorInfo
  );
  return (
    <>
      {isAuthorInfo && isAuthorInfo.authorState ? (
        <Switch>
          <Route path={'/operation'} component={Operation} />
        </Switch>
      ) : (
        <Switch>
          <Route path={['/', '/home']} exact component={Home} />
          <Route path={'/login'} component={Login} />
          <Route path={'/gallery'} component={Gallery} />
          <Route path={'/inquiry'} component={Inquiry} />
          <Route path={'/settings'} component={Settings} />
          <Route path={'/upload'} component={Upload} />
          <Route path={'/dispPicture'} component={DispPicture} />
          <Redirect to='/' />
        </Switch>
      )}
    </>
  );
};
export default App;
