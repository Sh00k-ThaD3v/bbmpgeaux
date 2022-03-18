<route>
{
  "meta": {
    "d2admin.menu.title": "-"
  }
}
</route>

<template>
  <d2-config
    icon-collection="mdi"
    svg-symbol-id="icon-[dir]-[name]"
  >
    <router-view/>
  </d2-config>
</template>

<script setup>
import { useD2AdminMenuMainStore } from '@/store/menu-main.js'
import { useD2AdminMenuSecondaryStore } from '@/store/menu-secondary.js'
import { menuMain, menuSecondary } from '@/menus/index.js'

const menuMainStore = useD2AdminMenuMainStore()
const menuSecondaryStore = useD2AdminMenuSecondaryStore()

menuMainStore.setMenus(menuMain)
menuSecondaryStore.setMenus(menuSecondary)
</script>
