import iconGroup from '../icon/src/icon-group.vue'

iconGroup.install = app => {
  app.component(iconGroup.name, iconGroup)
}

export default iconGroup
