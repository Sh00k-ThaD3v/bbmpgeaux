<template>
  <the-section title="center">
    <d2-flex class="flex" center space>
      <div class="flex__item" :class="`flex__item--${n}`" v-for="n in 3" :key="n"></div>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex__item {
    @apply p-1 rounded-sm;
    &.flex__item--1 { @apply bg-indigo-600; }
    &.flex__item--2 { @apply bg-indigo-300; }
    &.flex__item--3 { @apply bg-indigo-100; }
  }
}
</style>
