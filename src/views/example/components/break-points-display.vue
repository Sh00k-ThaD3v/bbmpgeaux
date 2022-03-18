<template>
  <h1 class="title">{{ status.breakPoint }}</h1>
  <d2-flex class="main" center>
    <break-points-display-item
      :value="status.min"
      name="min"
    ></break-points-display-item>
    <break-points-display-item
      v-for="name in breakPointsName"
      :key="name"
      :value="status[name]"
      :name="name">
    </break-points-display-item>
  </d2-flex>
  <pre class="code">{{ status }}</pre>
</template>

<script>
import { breakPointsName } from 'd2-components/utils/const.js'
import BreakPointsDisplayItem from './break-points-display-item.vue'

export default {
  components: {
    BreakPointsDisplayItem
  },
  props: {
    status: { type: Object }
  },
  setup () {
    return {
      breakPointsName
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @apply mb-8 text-center text-gray-500 text-9xl;
}
.main {
  @apply mb-8;
}
.code {
  @apply p-4 text-gray-600 border border-gray-100 rounded bg-gray-50;
}
</style>
