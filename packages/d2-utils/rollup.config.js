import multi from '@rollup/plugin-multi-entry'

const input = ['src/browser/element.js', 'src/browser/style.js', 'src/common/error.js', 'src/common/id.js', 'src/common/name.js', 'src/lang/array.js', 'src/lang/number.js', 'src/lang/string.js']

export default {
  input,
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'D2Utils',
      format: 'umd' 
    },
    {
      file: 'dist/index.es.js',
      format: 'esm' 
    }
  ],
  plugins: [
    multi()
  ],
  external: [
    'lodash',
    'nanoid'
  ]
}
