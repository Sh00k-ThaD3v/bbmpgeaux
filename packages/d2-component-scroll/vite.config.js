import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => ({
  plugins: [
    vue(),
    Jsx()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/d2-scroll/index.js'),
      name: 'D2Scroll'
    },
    rollupOptions: {
      external: [
        'vue',
        'classnames',
        'lodash',
        'overlayscrollbars'
      ],
      output: {
        globals: {
          vue: 'Vue'
        },
        entryFileNames: `js/index.[format].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return `css/index.css`
        }
      }
    }
  }
}))
