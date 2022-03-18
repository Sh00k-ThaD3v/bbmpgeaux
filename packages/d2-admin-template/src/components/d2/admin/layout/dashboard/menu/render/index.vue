<template>
  <d2-admin-layout-dashboard-menu-render-sub
    v-if="hasChildren(menu)"
    :menu="menu"
  />
  <d2-admin-layout-dashboard-menu-render-item
    v-else
    :menu="menu"
  />
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { hasChildren } from '@/utils/framework/menu.js'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {
      hasChildren
    }
  }
}
</script>
