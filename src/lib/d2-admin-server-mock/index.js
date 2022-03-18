import { createServer, Model } from 'miragejs'

import user from './table/user.csv'
import dict from './table/dict.csv'

import userRoutes from './routes/user'

createServer({
  // Define Models
  // https://miragejs.com/docs/main-concepts/models/
  models: {
    user: Model,
    dict: Model
  },
  // Use flat fixture files to seed database with data
  // https://miragejs.com/docs/main-concepts/fixtures/
  fixtures: {
    users: user,
    dicts: dict
  },
  seeds (server) {
    server.loadFixtures()
    // ... more seeds
  },
  routes () {
    this.namespace = 'api'
    userRoutes.call(this)
  }
})
