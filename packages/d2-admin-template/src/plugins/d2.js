import D2ComponentScroll from '@d2-framework/d2-component-scroll'
import '@d2-framework/d2-component-scroll/style'
import '@d2-framework/d2-component-scroll/theme/minimal-light'

import 'virtual:svg-icons-register'
import 'virtual:svg-icons-names'

import '@purge-icons/generated'

export default {
  install: (app, options) => {
    app.use(D2ComponentScroll)
  }
}
