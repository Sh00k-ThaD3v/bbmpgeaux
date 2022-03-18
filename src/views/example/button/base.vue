<template>
  <the-section title="button">
    <d2-button>button</d2-button>
  </the-section>
  <the-section title="button + text">
    <p class="mb-4">
      button
      <d2-button>Apple</d2-button>
      button
    </p>
    <p>button<d2-button>Apple</d2-button>button</p>
  </the-section>
  <the-section title="chinese">
    <d2-button>按钮</d2-button>
  </the-section>
  <the-section title="slot">
    <d2-button>
      <p class="text-lg text-left">Title</p>
      <p class="text-sm text-left">Description</p>
    </d2-button>
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
