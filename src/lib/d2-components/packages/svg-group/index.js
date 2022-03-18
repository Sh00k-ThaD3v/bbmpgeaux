import svgGroup from '../svg/src/svg-group.vue'

svgGroup.install = app => {
  app.component(svgGroup.name, svgGroup)
}

export default svgGroup
