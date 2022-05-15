import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // lazy-load component
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
