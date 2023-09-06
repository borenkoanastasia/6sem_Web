import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/New.vue') }],
  },
  {
    path: '/show/:name',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ElementsPage.vue') }],
  },
  {
    path: '/animals',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Animals.vue') }],
  },
  {
    path: '/departments',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Departments.vue') }],
  },
  {
    path: '/authorization',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AuthorizationPage.vue') },
    ],
  },
  {
    path: '/output',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OutputPage.vue') }],
  },
  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AccountPage.vue') }],
  },
  {
    path: '/accounts',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Accounts.vue') }],
  },
  {
    path: '/registration',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RegistrationPage.vue') },
    ],
  },
  {
    path: '/edit/:name/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EditPage.vue') }],
  },
  {
    path: '/show/:name/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ElementPage.vue') }],
  },
  {
    path: '/delete/:name/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Delete.vue') }],
  },
  {
    path: '/add/:name/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Add.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
