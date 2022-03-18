<template>
  <the-section title="circle">
    <d2-button circle>B</d2-button>
  </the-section>
  <the-section title="long text">
    <d2-button circle>content</d2-button>
  </the-section>
  <the-section title="icon and slot">
    <d2-button icon="fluent:auto-fit-height-24-regular" circle>content</d2-button>
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
