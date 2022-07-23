import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { beforeEach } from '@/router/middleware';
import './index.css';

createApp(App).use(router).mount('#app');

router.beforeResolve(
  (routeTo, routeFrom, next) =>
    beforeEach(routeTo, routeFrom, next)
);