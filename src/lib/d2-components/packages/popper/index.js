import popper from './src/popper.vue'

popper.install = app => {
  app.component(popper.name, popper)
}

export default popper
