<template>
  <the-section title="color">
    <div v-for="color in colorNames" :key="color" class="mb-4">
      <d2-button-group :color="color">
        <d2-button>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
        <d2-button>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="color disabled">
    <div v-for="color in colorNames" :key="color" class="mb-4">
      <d2-button-group :color="color">
        <d2-button disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button disabled>item</d2-button>
        <d2-button disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button disabled>item</d2-button>
        <d2-button disabled>item</d2-button>
        <d2-button disabled>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="color plain">
    <div v-for="color in colorNames" :key="color" class="mb-4">
      <d2-button-group :color="color">
        <d2-button plain>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button plain>item</d2-button>
        <d2-button plain>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button plain>item</d2-button>
        <d2-button plain>item</d2-button>
        <d2-button plain>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="color plain disabled">
    <div v-for="color in colorNames" :key="color" class="mb-4">
      <d2-button-group :color="color">
        <d2-button plain disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button plain disabled>item</d2-button>
        <d2-button plain disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group :color="color">
        <d2-button plain disabled>item</d2-button>
        <d2-button plain disabled>item</d2-button>
        <d2-button plain disabled>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
</template>

<script>
import { colorNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      colorNames
    }
  }
}
</script>
