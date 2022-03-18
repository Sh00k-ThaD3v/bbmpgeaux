<template>
  <the-section title="ring">
    <d2-button ring>button</d2-button>
  </the-section>
  <the-section title="ring offset">
    <d2-button ring-offset ring>button</d2-button>
  </the-section>
  <the-section title="ring offset 4">
    <d2-button :ring-offset="4" ring>button</d2-button>
  </the-section>
  <the-section title="ring width 4">
    <d2-button :ring-width="4" ring>button</d2-button>
  </the-section>
  <the-section title="ring offset 4 width 4">
    <d2-button :ring-offset="4" :ring-width="4" ring>button</d2-button>
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
