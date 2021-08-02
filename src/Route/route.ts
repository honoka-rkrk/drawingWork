import Chat from '../Chat/Component/main';
import Upload from '../Upload/Component/main';
import DispPicture from '../DispPicture/Component/main';

export interface RouteProps {
  path: string;
  exact: boolean | undefined;
  component: React.FC;
}

export const routes: RouteProps[] = [
  { path: '/chat', exact: undefined, component: Chat },
  { path: '/upload', exact: undefined, component: Upload },
  { path: '/dispPicture', exact: undefined, component: DispPicture }
];
