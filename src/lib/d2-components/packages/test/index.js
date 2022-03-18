import test from './src/test.jsx'

test.install = app => {
  app.component(test.name, test)
}

export default test
