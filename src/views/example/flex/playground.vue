<template>
  <the-section title="playground">
    <d2-flex dir="left" cross="top" box="first">
      <d2-flex main="center" cross="center" class="view">
        <d2-flex
          class="flex"
          :dir="dirValue"
          :main="mainValue"
          :cross="crossValue"
          :box="boxValue"
          :space="spaceValue"
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
        <playground-control label="dir" :options="dir" v-model:value="dirValue"></playground-control>
        <playground-control label="main" :options="main" v-model:value="mainValue"></playground-control>
        <playground-control label="cross" :options="cross" v-model:value="crossValue"></playground-control>
        <playground-control label="box" :options="box" v-model:value="boxValue"></playground-control>
        <playground-control label="space" :options="space" v-model:value="spaceValue"></playground-control>
      </div>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { flexProps, spaceNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'
import PlaygroundControl from '../components/playground-control.vue'

const { dir, main, cross, box } = flexProps

export default {
  components: {
    TheSection,
    PlaygroundControl
  },
  setup () {
    const dirValue = ref('')
    const mainValue = ref('')
    const crossValue = ref('')
    const boxValue = ref('')
    const spaceValue = ref('base')

    return {
      dir: ['', ...dir],
      dirValue,
      main: ['', ...main],
      mainValue,
      cross: ['', ...cross],
      crossValue,
      box: ['', ...box],
      boxValue,
      space: [false, ...spaceNames],
      spaceValue
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
