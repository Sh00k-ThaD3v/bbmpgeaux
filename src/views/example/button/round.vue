<template>
  <the-section title="round">
    <d2-button round>button</d2-button>
  </the-section>
  <the-section title="round half">
    <d2-button round-left>Left</d2-button>
    <d2-button round-right>Right</d2-button>
  </the-section>
  <the-section title="round half icon">
    <d2-button icon="akar-icons:chevron-left" round-left>Left</d2-button>
    <d2-button icon-right="akar-icons:chevron-right" round-right>Right</d2-button>
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
