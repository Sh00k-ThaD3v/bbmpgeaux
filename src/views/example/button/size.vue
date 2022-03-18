<template>
  <the-section title="size">
    <d2-button>Apple</d2-button>
    <d2-button v-for="size in sizeNames" :key="size" :size="size">Apple</d2-button>
  </the-section>
  <the-section title="round">
    <d2-button round>Apple</d2-button>
    <d2-button v-for="size in sizeNames" :key="size" :size="size" round>Apple</d2-button>
  </the-section>
  <the-section title="icon">
    <d2-button icon="fluent:auto-fit-height-24-regular">Apple</d2-button>
    <d2-button v-for="size in sizeNames" :key="size" icon="fluent:auto-fit-height-24-regular" :size="size">Apple</d2-button>
  </the-section>
  <the-section title="round half">
    <span class="mr-4">
      <d2-button round-left>Left</d2-button>
      <d2-button round-right>Right</d2-button>
    </span>
    <span v-for="size in sizeNames" :key="size" class="mr-4">
      <d2-button :size="size" round-left>Left</d2-button>
      <d2-button :size="size" round-right>Right</d2-button>
    </span>
  </the-section>
  <the-section title="circle">
    <d2-button circle>B</d2-button>
    <d2-button v-for="size in sizeNames" :key="size" :size="size" circle>Apple</d2-button>
  </the-section>
  <the-section title="text">
    <d2-button text>Apple</d2-button>
    <d2-button v-for="size in sizeNames" :key="size" :size="size" text>Apple</d2-button>
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
