import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { beforeEach } from '@router/middleware'
import './index.css'

const app = createApp(App)
const store = createPinia()

store.use(piniaPluginPersistedstate)

app
  .use(router)
  .use(store)
  .mount('#app')

router.beforeResolve(
  (routeTo, routeFrom, next) =>
    beforeEach(routeTo, routeFrom, next)
)