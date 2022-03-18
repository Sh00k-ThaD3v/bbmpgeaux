<template>
  <the-section title="default">
    <d2-flex class="flex" cross="top" space>
      <div class="flex__item flex__item--size" :class="`flex__item--${n}`" v-for="n in 6" :key="n"></div>
    </d2-flex>
  </the-section>
  <the-section title="wrap">
    <d2-flex class="flex" cross="top" wrap space>
      <div class="flex__item flex__item--size" :class="`flex__item--${n}`" v-for="n in 6" :key="n"></div>
    </d2-flex>
  </the-section>
  <the-section title="wrap-r">
    <d2-flex class="flex" cross="top" wrap-r space>
      <div class="flex__item flex__item--size" :class="`flex__item--${n}`" v-for="n in 6" :key="n"></div>
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
    &.flex__item--2 { @apply bg-indigo-500; }
    &.flex__item--3 { @apply bg-indigo-400; }
    &.flex__item--4 { @apply bg-indigo-300; }
    &.flex__item--5 { @apply bg-indigo-200; }
    &.flex__item--6 { @apply bg-indigo-100; }
    &.flex__item--size {
      flex-grow: 0;
      flex-shrink: 0;
      @apply w-4;
    }
  }
}
</style>
