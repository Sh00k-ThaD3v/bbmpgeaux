<template>
  <the-section title="base">
    <d2-button-group>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="inline">
    <p>
      text
      <d2-button-group>
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
      </d2-button-group>
      text
    </p>
    <p>
      text
      <d2-button-group>
        <d2-button icon="fluent:auto-fit-height-24-regular">item</d2-button>
        <d2-button icon="fluent:auto-fit-height-24-regular">item</d2-button>
      </d2-button-group>
      text
    </p>
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
