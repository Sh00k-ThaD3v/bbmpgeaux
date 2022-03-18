<template>
  <the-section title="window size">
    <d2-button-group>
      <d2-button icon="ant-design:column-width-outlined">
        width {{ width }}
      </d2-button>
      <d2-button icon="ant-design:column-height-outlined">
        height {{ height }}
      </d2-button>
    </d2-button-group>
  </the-section>
</template>

<script>
import { useWindowSize } from 'd2-components/use/window-size.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const { width, height } = useWindowSize()
    return {
      width,
      height
    }
  }
}
</script>
