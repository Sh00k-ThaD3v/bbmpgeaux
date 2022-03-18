import { Menu, createRouteMenus } from '@/utils/framework/menu.js'

const menus = ({ title, icon, path }) => (
  new Menu(title)
    .icon(icon)
    .add(
      createRouteMenus({
        routeNameExp: new RegExp(`^${path.replace(/\//g, '-')}`),
        baseUrl: '/dashboard/'
      })
    )
)

export const indexMenu = new Menu('首页')
  .url('/')
  .icon('icon-park-outline:home')

export const dashboardIndexMenu = new Menu('控制台首页')
  .url('/dashboard')
  .icon('icon-park-outline:dashboard')

export const dashboardDemoComponentD2ScrollMenus = menus({
  title: '滚动',
  icon: 'icon-park-outline:move',
  path: 'dashboard/demo/component/d2-scroll'
})

export const dashboardDemoComponentD2SvgMenus = menus({
  title: 'SVG',
  icon: 'icon-park-outline:pic-one',
  path: 'dashboard/demo/component/d2-svg'
})

export const dashboardDemoComponentD2IconMenus = menus({
  title: '图标',
  icon: 'icon-park-outline:emotion-happy',
  path: 'dashboard/demo/component/d2-icon'
})

export const dashboardDemoComponentD2BreakPointMenus = menus({
  title: '断点',
  icon: 'icon-park-outline:distribute-horizontally',
  path: 'dashboard/demo/component/d2-break-point'
})

export const dashboardDemoComponentD2FlexMenus = menus({
  title: 'Flex',
  icon: 'icon-park-outline:carousel',
  path: 'dashboard/demo/component/d2-flex'
})

export const dashboardDemoComponentSTableMenus = menus({
  title: 'Surely Vue',
  icon: 'icon-park-outline:table-file',
  path: 'dashboard/demo/component/s-table'
})

export const dashboardDemoComponentMenus = new Menu('组件')
  .icon('icon-park-outline:components')
  .add(dashboardDemoComponentD2ScrollMenus)
  .add(dashboardDemoComponentD2SvgMenus)
  .add(dashboardDemoComponentD2IconMenus)
  .add(dashboardDemoComponentD2BreakPointMenus)
  .add(dashboardDemoComponentD2FlexMenus)
  .add(dashboardDemoComponentSTableMenus)

export const dashboardDemoLayoutDashboardMenus = menus({
  title: '控制台布局',
  icon: 'icon-park-outline:page',
  path: 'dashboard/demo/layout/dashboard'
})

export const dashboardDemoLayoutMenus = new Menu('布局')
  .icon('icon-park-outline:page')
  .add(dashboardDemoLayoutDashboardMenus)

export const dashboardDocumentMenus = menus({
  title: '文档',
  icon: 'icon-park-outline:doc-detail',
  path: 'dashboard/document'
})
