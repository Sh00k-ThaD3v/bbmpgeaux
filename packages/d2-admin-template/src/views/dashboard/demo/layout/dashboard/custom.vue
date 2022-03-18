<route>
{
  "meta": {
    "d2admin.layout.dashboard.customBody": true,
    "d2admin.menu.title": "自定义"
  }
}
</route>

<template>
  <d2-admin-layout-dashboard-container
    :header-border="headerBorder"
    :footer-border="footerBorder"
  >
    <template v-if="headerActive" #header>
      <h1 class="text-lg">Header</h1>
    </template>
    <template v-if="footerActive" #footer>
      <h1 class="text-lg">Footer</h1>
    </template>
    <section class="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
      <a-space>
        <a-button @click="headerToggle">切换顶栏</a-button>
        <a-button @click="footerToggle">切换底栏</a-button>
        <a-button @click="headerBorderToggle">切换顶栏边框</a-button>
        <a-button @click="footerBorderToggle">切换底栏边框</a-button>
      </a-space>
    </section>
    <demo-markdown-article/>
  </d2-admin-layout-dashboard-container>
</template>

<script>
import { useSwitch } from '@/use/switch.js'

export default {
  setup () {
    const {
      value: headerActive,
      toggle: headerToggle
    } = useSwitch(true)

    const {
      value: footerActive,
      toggle: footerToggle
    } = useSwitch(true)

    const {
      value: headerBorder,
      toggle: headerBorderToggle
    } = useSwitch(false)

    const {
      value: footerBorder,
      toggle: footerBorderToggle
    } = useSwitch(false)

    return {
      headerActive,
      headerToggle,
      footerActive,
      footerToggle,
      headerBorder,
      headerBorderToggle,
      footerBorder,
      footerBorderToggle
    }
  }
}
</script>
