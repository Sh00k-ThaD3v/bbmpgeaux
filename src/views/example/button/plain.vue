<template>
  <the-section title="plain">
    <d2-button color="indigo" plain>button</d2-button>
  </the-section>
  <the-section title="plain off">
    <d2-button color="indigo">button</d2-button>
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
