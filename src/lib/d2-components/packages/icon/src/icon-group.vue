<template>
  <slot></slot>
</template>

<script>
import { computed } from 'vue'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'

export const name = makeComponentName('icon-group')

const provide = provideGenerator(name)

export default {
  name,
  props: {
    collection: { type: String, default: '' }
  },
  setup (props) {
    provide('collection', computed(() => props.collection))
  }
}
</script>
