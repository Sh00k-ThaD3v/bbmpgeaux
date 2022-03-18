<template>
  <the-section title="space off">
    <d2-flex class="flex" box="mean">
      <div class="flex__item" v-for="n in 3" :key="n"></div>
    </d2-flex>
  </the-section>
  <the-section title="space">
    <d2-flex space="large">
      <d2-flex class="flex" space>
        <div class="flex__item" v-for="n in 3" :key="n" box="mean"></div>
      </d2-flex>
      <d2-flex v-for="size in sizeNames" :key="size" class="flex" :space="size" box="mean">
        <div class="flex__item" v-for="n in 3" :key="n"></div>
      </d2-flex>
    </d2-flex>
  </the-section>
  <the-section v-for="_dir in dir" :key="_dir" :title="`dir:${_dir}`">
    <d2-flex space="large">
      <d2-flex class="flex" :dir="_dir" space>
        <div class="flex__item" v-for="n in 3" :key="n" box="mean"></div>
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import { sizeNames, flexProps } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir } = flexProps

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      sizeNames,
      dir
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @apply w-24 h-24 p-1 bg-gray-100 rounded;
  .flex__item {
    @apply p-1 bg-indigo-500 rounded-sm;
    &.flex__item--1 { @apply bg-indigo-600; }
  }
}
</style>
