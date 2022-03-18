import component from './src/index.jsx'

export default {
  install: (app, options) => {
    app.component('d2-scroll', component)
  }
}
