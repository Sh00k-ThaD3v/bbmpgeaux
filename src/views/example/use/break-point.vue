<template>
  <the-section title="break point">
    <d2-break-point v-slot="status">
      <break-points-display :status="status"></break-points-display>
    </d2-break-point>
  </the-section>
  <the-section title="responsive">
    <d2-flex space="large" cross="top" wrap>
      <d2-flex
        v-for="(data, index) in data"
        :key="index"
        dir="top"
        cross="stretch"
        space="large"
        grow="1"
        shrink="0"
        class="mb-4"
      >
        <span class="text-xl text-center text-gray-600 font-bold">{{ data }}</span>
        <pre class="px-4 py-2 bg-gray-50 text-gray-600 rounded border border-gray-100">min: {{ config[index][0] }}</pre>
        <pre class="px-4 py-2 bg-gray-50 text-gray-600 rounded border border-gray-100">{{ config[index][1] }}</pre>
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import { computed, unref } from 'vue'
import { useBreakPoint } from 'd2-components/use/break-point.js'
import TheSection from '../components/the-section.vue'
import BreakPointsDisplay from '../components/break-points-display.vue'

export default {
  components: {
    TheSection,
    BreakPointsDisplay
  },
  setup () {
    const status = useBreakPoint()

    const responsive = status.responsive

    const config = [
      [0, { sm: 1, md: 2, xxl: 5 }],
      [0, { sm: 1, xxl: 5, md: 2, lg: 3 }],
      [0, { sm: 1, md: 2, lg: 3, xl: 4, xxl: 5 }],
      ['gray', { sm: 'red', md: 'yellow', lg: 'green', xl: 'blue', xxl: 'indigo' }],
      ['mb-4', { lg: 'mb-8' }],
      ['min', { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' }],
      ['<640', { sm: '>=640', md: '>=768', lg: '>=1024', xl: '>=1280', xxl: '>=1536' }]
    ]

    const data = computed(() => config.map(e => unref(responsive(...e))))

    return {
      status,
      config,
      data
    }
  }
}
</script>
