export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'classnames',
    'highlight.js',
    'lodash',
    'markdown-it',
    'vite-plugin-md'
  ]
}
