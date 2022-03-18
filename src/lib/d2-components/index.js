import { configDefault } from './utils/config.js'

import BreakPoint from './packages/break-point/index.js'
import Button from './packages/button/index.js'
import ButtonGroup from './packages/button-group/index.js'
import ConfigProvider from './packages/config/index.js'
import Flex from './packages/flex/index.js'
import Icon from './packages/icon/index.js'
import IconGroup from './packages/icon-group/index.js'
import Input from './packages/input/index.js'
import Popper from './packages/popper/index.js'
import Svg from './packages/svg/index.js'
import SvgGroup from './packages/svg-group/index.js'
import Test from './packages/test/index.js'

import './packages/theme/index.scss'

const components = [
  BreakPoint,
  Button,
  ButtonGroup,
  ConfigProvider,
  Flex,
  Icon,
  IconGroup,
  Input,
  Popper,
  Svg,
  SvgGroup,
  Test
]

function install (app, option) {
  const optionMixed = Object.assign({}, configDefault, option)

  // getCurrentInstance().appContext.config.globalProperties.$D2COM
  // getCurrentInstance().proxy.$D2COM
  app.config.globalProperties.$D2COM = optionMixed

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
