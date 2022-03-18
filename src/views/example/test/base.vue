<template>
  <the-section title="test">
    <d2-test>content</d2-test>
  </the-section>
  <the-section title="span">
    <d2-test>
      <span>span content</span>
    </d2-test>
  </the-section>
  <the-section title="button">
    <d2-test>
      <d2-button>d2-button content</d2-button>
    </d2-test>
  </the-section>
  <the-section title="span x 2">
    <d2-test>
      <span>span content</span>
      <span>span content</span>
    </d2-test>
  </the-section>
  <the-section title="button x 2">
    <d2-test>
      <d2-button>d2-button content</d2-button>
      <d2-button>d2-button content</d2-button>
    </d2-test>
  </the-section>
  <the-section title="button v-for">
    <d2-test>
      <d2-button v-for="n in 3" :key="n">{{ n }}</d2-button>
    </d2-test>
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
