<template>
  <a-menu
    mode="horizontal"
    :selected-keys="selectedKeys"
    @select="onSelect"
  >
    <d2-admin-layout-dashboard-menu-render
      v-for="menu of menus"
      :key="getMenuId(menu)"
      :menu="menu"
    />
  </a-menu>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { useD2AdminMenuSecondaryStore } from '@/store/menu-secondary.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { compact } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { useMenu } from '@/use/menu.js'
import { getMenuId } from '@/utils/framework/menu.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const route = useRoute()

    const menu = useMenu()
    const { navigateByMenu } = menu

    const menuStore = useD2AdminMenuSecondaryStore()
    const { menus } = storeToRefs(menuStore)
    const { getMenuById, getMenuByUrl } = menuStore

    function onSelect ({ key }) {
      navigateByMenu(getMenuById(key))
    }

    const selectedKeys = computed(() => compact([getMenuId(getMenuByUrl(route.fullPath))]))

    return {
      menus,
      onSelect,
      selectedKeys,
      getMenuId
    }
  }
}
</script>
