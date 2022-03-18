<template>
  <the-section v-for="_self in self" :key="_self" :title="_self || 'default'">
    <d2-flex class="flex" box="mean" space>
      <d2-flex class="flex__item"></d2-flex>
      <d2-flex class="flex__item"></d2-flex>
      <d2-flex class="flex__item" :self="_self"></d2-flex>
      <d2-flex class="flex__item"></d2-flex>
      <d2-flex class="flex__item"></d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import { flexProps } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { self } = flexProps

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      self: ['', ...self]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex__item {
    @apply p-1 bg-indigo-500 rounded-sm;
  }
}
</style>
