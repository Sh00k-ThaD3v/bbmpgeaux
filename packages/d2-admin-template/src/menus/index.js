import { Menu } from '@/utils/framework/menu.js'
import {
  indexMenu,
  dashboardIndexMenu,
  dashboardDemoComponentMenus,
  dashboardDemoLayoutMenus,
  dashboardDocumentMenus
} from './data.js'

const startMenu = new Menu('HelloWorld').url('/dashboard/hello-world').icon('icon-park-outline:file-code').value()

export const menuMain = [
  indexMenu.value(),
  dashboardIndexMenu.value(),
  startMenu,
  dashboardDemoComponentMenus.value(),
  dashboardDemoLayoutMenus.value(),
  dashboardDocumentMenus.value()
]

export const menuSecondary = [
  dashboardDemoComponentMenus.value(),
  dashboardDemoLayoutMenus.value(),
  dashboardDocumentMenus.value()
]
