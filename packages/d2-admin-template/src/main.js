import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import '@/style/index.scss'

import App from './App.vue'

import d2 from '@/plugins/d2.js'
import surely from '@/plugins/surely.js'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(d2)
  .use(surely)
  .mount('#app')
