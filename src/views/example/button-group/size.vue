<template>
  <the-section title="size and space">
    <div v-for="size in sizeNames" :key="size" class="mb-4">
      <d2-button :size="size">button</d2-button>
      <d2-button-group :size="size">
        <d2-button>item</d2-button>
      </d2-button-group>
      <d2-button-group :size="size">
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
      </d2-button-group>
      <d2-button-group :size="size">
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
</template>

<script>
import { sizeNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      sizeNames
    }
  }
}
</script>
