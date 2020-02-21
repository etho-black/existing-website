import HomeStartUp from '../pages/HomeStartUp'
import NotFound from '../pages/elements/404'

export const routes = [{
    path: '/',
    name: 'HomeStartUp',
    component: HomeStartUp
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
];
