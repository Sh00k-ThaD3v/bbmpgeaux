import STable, { setLicenseKey } from '@surely-vue/table'
import '@surely-vue/table/dist/index.css'

setLicenseKey('your license key')

export default {
  install: (app, options) => {
    app.use(STable)
  }
}
