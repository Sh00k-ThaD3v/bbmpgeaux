<route>
{
  "meta": {
    "d2admin.menu.title": "试验"
  }
}
</route>

<template>
  <demo-section title="playground">
    <d2-flex dir="left" cross="top" box="first">
      <d2-flex main="center" cross="center" class="view">
        <d2-flex
          class="flex"
          :dir="dirValue"
          :main="mainValue"
          :cross="crossValue"
          :box="boxValue"
        >
          <d2-flex
            class="flex__item"
            :class="`flex__item--${n}`"
            v-for="n in 5"
            :key="n"
            center
          >
            {{ n }}
          </d2-flex>
        </d2-flex>
      </d2-flex>
      <div>
        <demo-playground-controller
          label="dir"
          :options="dir"
          v-model:value="dirValue"
        />
        <demo-playground-controller
          label="main"
          :options="main"
          v-model:value="mainValue"
        />
        <demo-playground-controller
          label="cross"
          :options="cross"
          v-model:value="crossValue"
        />
        <demo-playground-controller
          label="box"
          :options="box"
          v-model:value="boxValue"
        />
      </div>
    </d2-flex>
  </demo-section>
</template>

<script>
import { ref } from 'vue'
import { flexProps } from '@/utils/const/flex.js'

const { dir, main, cross, box } = flexProps

export default {
  setup () {
    const dirValue = ref('')
    const mainValue = ref('')
    const crossValue = ref('')
    const boxValue = ref('')

    return {
      dir: ['', ...dir],
      dirValue,
      main: ['', ...main],
      mainValue,
      cross: ['', ...cross],
      crossValue,
      box: ['', ...box],
      boxValue
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  @apply mr-4;
  .flex {
    @apply w-64 h-64 p-1 bg-gray-100;
    .flex__item {
      @apply p-2 text-white transition-all rounded-sm;
      &.flex__item--1 { @apply bg-indigo-700; }
      &.flex__item--2 { @apply bg-indigo-600; }
      &.flex__item--3 { @apply bg-indigo-500; }
      &.flex__item--4 { @apply bg-indigo-400; }
      &.flex__item--5 { @apply bg-indigo-300; }
    }
  }
}
</style>
