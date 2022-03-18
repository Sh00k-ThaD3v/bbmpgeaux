<template>
  <the-section title="flex">
    <template v-for="_dir in dir" :key="_dir">
      <template v-for="_main in main" :key="_main">
        <template v-for="_cross in cross" :key="_cross">
          <template v-for="_box in box" :key="_box">
            <!-- item -->
            <d2-flex dir="left" cross="center" class="row">
              <d2-flex :dir="_dir" :main="_main" :cross="_cross" :box="_box" class="flex" space>
                <div class="flex__item" :class="`flex__item--${n}`" v-for="n in 3" :key="n"></div>
              </d2-flex>
              <div class="row__code">
                <span class="code__prop" :class="{ 'code__prop--empty': !_dir }">dir="<span class="prop__highlight">{{ _dir }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !_main }">main="<span class="prop__highlight">{{ _main }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !_cross }">cross="<span class="prop__highlight">{{ _cross }}</span>"</span>
                <span class="code__prop" :class="{ 'code__prop--empty': !_box }">box="<span class="prop__highlight">{{ _box }}</span>"</span>
              </div>
            </d2-flex>
            <!-- item end -->
          </template>
        </template>
      </template>
    </template>
  </the-section>
</template>

<script>
import { flexProps } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

const { dir, main, cross, box } = flexProps

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      dir: ['', ...dir],
      main: ['', ...main],
      cross: ['', ...cross],
      box: ['', ...box]
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  @apply mb-4 transition-all rounded;
  &:hover {
    @apply bg-gray-100;
  }
  .flex {
    @apply w-24 h-24 p-1 mr-4 bg-gray-100 rounded;
    .flex__item {
      @apply p-1 rounded;
      &.flex__item--1 { @apply bg-indigo-600; }
      &.flex__item--2 { @apply bg-indigo-300; }
      &.flex__item--3 { @apply bg-indigo-100; }
    }
  }
  .row__code {
    @apply text-gray-500;
    .code__prop {
      @apply mr-2;
      &.code__prop--empty {
        @apply text-gray-200;
      }
      .prop__highlight {
        @apply mx-1 text-indigo-500;
      }
    }
  }
}
</style>
