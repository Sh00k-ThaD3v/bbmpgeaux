<template>
  <the-section title="input">
    <d2-flex dir="left" box="first">
      <d2-flex main="center" cross="center" class="view">
        <d2-input
          v-model:value="value"
          :size="sizeValue"
          :color="colorValue"
          :clearable="clearableValue"
        ></d2-input>
      </d2-flex>
      <div class="control">
        <playground-control label="size" :options="size" v-model:value="sizeValue"></playground-control>
        <playground-control label="color" :options="color" v-model:value="colorValue"></playground-control>
        <playground-control label="clearable" :options="clearable" v-model:value="clearableValue"></playground-control>
      </div>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { colorNames, sizeNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'
import PlaygroundControl from '../components/playground-control.vue'

export default {
  components: {
    TheSection,
    PlaygroundControl
  },
  setup () {
    const value = ref('Hello World')

    return {
      value,
      color: ['', ...colorNames],
      colorValue: ref(''),
      size: ['', ...sizeNames],
      sizeValue: ref(''),
      clearable: [false, true],
      clearableValue: ref(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  @apply w-64 h-64 mr-4 border border-gray-100 rounded bg-gray-50;
}
</style>
