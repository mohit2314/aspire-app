import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Login' },
    // component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( 'pages/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '',
    name:'Dashboard',
    component: () => import('pages/Dashboard.vue') }],
  },
  {
    path:'/ui-challenge',
    component:()=>import('pages/UiChallenge.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
