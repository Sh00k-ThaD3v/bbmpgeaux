import button from './src/button.jsx'

button.install = app => {
  app.component(button.name, button)
}

export default button
