import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    meta: { requiredAuth: true },
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
  {
    path: '/profile',
    name: 'profile',
    meta: { requiredAuth: true },
    // lazy-load component
    component: () =>
      import(/* webpackChunkName: "user_profile" */ '../views/UserProfilePage.vue'),
  },
  {
    path: '/account',
    name: 'account',
    meta: { requiredAuth: true },
    // lazy-load component
    component: () =>
      import(/* webpackChunkName: "user_account" */ '../views/UserAccountPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
