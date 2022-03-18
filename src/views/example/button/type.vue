<template>
  <the-section title="type">
    <d2-button>default</d2-button>
    <d2-button v-for="type in buttonTypes" :key="type" :type="type">{{ type }}</d2-button>
  </the-section>
</template>

<script>
import { buttonTypes } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      buttonTypes
    }
  }
}
</script>
