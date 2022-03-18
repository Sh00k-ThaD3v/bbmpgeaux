<template>
  <a-menu-item :key="menuId">
    <template v-if="menuIcon" #icon>
      <d2-icon :name="menuIcon"/>
    </template>
    {{ menuTitle }}
  </a-menu-item>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { defineComponent } from 'vue'
import { useMenu } from '@/use/menu.js'

export default defineComponent({
  name: makeNameByUrl(import.meta.url),
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { menu } = props

    const { menuId, menuTitle, menuIcon } = useMenu(menu)

    return {
      menuId,
      menuTitle,
      menuIcon
    }
  }
})
</script>
