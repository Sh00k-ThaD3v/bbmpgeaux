import flex from './src/flex.jsx'

flex.install = app => {
  app.component(flex.name, flex)
}

export default flex
