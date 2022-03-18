import input from './src/input.jsx'

input.install = app => {
  app.component(input.name, input)
}

export default input
