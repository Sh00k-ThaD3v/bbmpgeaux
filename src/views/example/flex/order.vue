<template>
  <the-section title="order">
    <d2-flex class="group" center space>
      <d2-flex class="item" v-for="n in orders.length" :key="n" :order="orders[n - 1]">
        {{ orders[n - 1] }}
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      orders: [1, 4, 3, -2, 2, -1, 0]
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  @apply w-72 h-16 bg-indigo-500 rounded;
  .item {
    @apply py-1 px-2 bg-white text-indigo-500 rounded;
  }
}
</style>
