<template>
  <slot></slot>
</template>

<script>
import { computed } from 'vue'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('svg-group')

const provide = provideGenerator(name)

export default {
  name,
  props: {
    name: { type: String, default: '' }
  },
  setup (props) {
    provide('name', computed(() => props.name))
  }
}
</script>
