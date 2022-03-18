import D2Template from './src/index.vue'

D2Template.install = app => {
  app.component(D2Template.name, D2Template)
}

export default D2Template
