import Main from '@/views/Main';

const routes = [
  {
    path: '/main',
    component: Main
  },
  {
    path: '*',
    redirect: '/main'
  }
];

export default routes;
