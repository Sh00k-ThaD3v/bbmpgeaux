import icon from './src/icon.vue'

icon.install = app => {
  app.component(icon.name, icon)
}

export default icon
