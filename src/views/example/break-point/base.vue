<template>
  <the-section title="break point">
    <d2-break-point v-slot="status">
      <break-points-display :status="status"></break-points-display>
    </d2-break-point>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'
import BreakPointsDisplay from '../components/break-points-display.vue'

export default {
  components: {
    TheSection,
    BreakPointsDisplay
  }
}
</script>
