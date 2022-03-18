import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
import jsx from '@vitejs/plugin-vue-jsx'

// https://github.com/rollup/plugins/tree/master/packages/dsv
import dsv from '@rollup/plugin-dsv'

// https://github.com/hannoeru/vite-plugin-pages
import pages from 'vite-plugin-pages'

// https://github.com/anncwb/vite-plugin-svg-icons
import svgIcons from 'vite-plugin-svg-icons'

// https://github.com/antfu/purge-icons
import purgeIcons from 'vite-plugin-purge-icons'

import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    dsv(),
    pages({
      pagesDir: 'src/views',
      exclude: [
        '**/components/*.vue'
      ],
      extensions: ['vue']
    }),
    purgeIcons(),
    svgIcons({
      iconDirs: [
        path.resolve(__dirname, 'src/assets/svg/icon')
      ],
      symbolId: 'svg-icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'd2-components': '/src/lib/d2-components',
      'd2-admin-server-mock': '/src/lib/d2-admin-server-mock'
    }
  },
  server: {
    open: true
  }
})
