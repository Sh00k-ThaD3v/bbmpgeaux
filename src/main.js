import { createApp } from 'vue'

import 'vite-plugin-svg-icons/register'

import '@iconify/iconify'
import '@purge-icons/generated'

import App from '@/App.vue'
import router from '@/router'

import d2AdminPackages from '@/lib/d2-admin-packages'
import d2Components from '@/lib/d2-components'
import '@/lib/d2-admin-server-mock'

import svgNames from 'virtual:svg-icons-names'

import '@/index.css'

createApp(App)
  .use(router)
  .use(d2Components, {
    svgPrefix: 'svg-icon-',
    svgNames
  })
  .use(d2AdminPackages)
  .mount('#app')
