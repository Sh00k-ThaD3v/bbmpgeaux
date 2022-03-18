import buttonGroup from '../button/src/button-group.jsx'

buttonGroup.install = app => {
  app.component(buttonGroup.name, buttonGroup)
}

export default buttonGroup
