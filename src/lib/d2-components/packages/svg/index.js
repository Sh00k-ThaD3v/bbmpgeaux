import svg from './src/svg.vue'

svg.install = app => {
  app.component(svg.name, svg)
}

export default svg
