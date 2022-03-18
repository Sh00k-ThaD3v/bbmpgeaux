<template>
  <the-section title="plain">
    <d2-button-group color="indigo" plain>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group color="indigo" plain>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group color="indigo" plain>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="plain off">
    <d2-button-group color="indigo">
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group color="indigo">
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
    <d2-button-group color="indigo">
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
      <d2-button>item</d2-button>
    </d2-button-group>
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
