import D2Template from './packages/D2Template/index.js'

const components = [
  D2Template
]

export default function (app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
