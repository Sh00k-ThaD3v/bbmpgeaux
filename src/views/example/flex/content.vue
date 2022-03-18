<template>
  <template v-for="_content in content" :key="_content">
    <the-section :title="_content || 'default'">
      <d2-flex class="flex" :content="_content" wrap space>
        <div class="flex__item flex__item--size" :class="`flex__item--${n}`" v-for="n in 6" :key="n"></div>
      </d2-flex>
    </the-section>
  </template>
</template>

<script>
import { flexProps } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { content } = flexProps

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      content: ['', ...content]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex__item {
    @apply p-1 rounded-sm;
    &.flex__item--1 { @apply bg-indigo-600; }
    &.flex__item--2 { @apply bg-indigo-500; }
    &.flex__item--3 { @apply bg-indigo-400; }
    &.flex__item--4 { @apply bg-indigo-300; }
    &.flex__item--5 { @apply bg-indigo-200; }
    &.flex__item--6 { @apply bg-indigo-100; }
    &.flex__item--size {
      @apply w-4;
    }
  }
}
</style>
