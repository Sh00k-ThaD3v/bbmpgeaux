<template>
  <the-section title="icon">
    <d2-button icon="fluent:auto-fit-height-24-regular">Apple</d2-button>
  </the-section>
  <the-section title="icon + text">
    <p class="mb-4">
      text
      <d2-button icon="fluent:auto-fit-height-24-regular">Apple</d2-button>
      text
    </p>
    <p>text<d2-button icon="fluent:auto-fit-height-24-regular">Apple</d2-button>text</p>
  </the-section>
  <the-section title="icon right">
    <d2-button icon-right="fluent:auto-fit-height-24-regular">Apple</d2-button>
  </the-section>
  <the-section title="icon left right">
    <d2-button icon="akar-icons:chevron-left">Left</d2-button>
    <d2-button icon-right="akar-icons:chevron-right">Right</d2-button>
  </the-section>
  <the-section title="icon collection with icon-group">
    <d2-icon-group collection="akar-icons">
      <d2-button icon="chevron-left">Left</d2-button>
      <d2-button icon-right="chevron-right">Right</d2-button>
    </d2-icon-group>
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
