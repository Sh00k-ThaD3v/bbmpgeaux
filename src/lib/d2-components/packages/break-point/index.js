import breakPoint from './src/break-point.jsx'

breakPoint.install = app => {
  app.component(breakPoint.name, breakPoint)
}

export default breakPoint
