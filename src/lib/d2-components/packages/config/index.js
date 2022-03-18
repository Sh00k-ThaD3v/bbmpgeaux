import configProvider from './src/config.jsx'

configProvider.install = app => {
  app.component(configProvider.name, configProvider)
}

export default configProvider
