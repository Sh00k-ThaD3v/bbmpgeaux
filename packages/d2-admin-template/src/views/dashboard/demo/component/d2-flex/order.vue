<route>
{
  "meta": {
    "d2admin.menu.title": "顺序"
  }
}
</route>

<template>
  <demo-section title="order">
    <d2-flex class="group" center space>
      <d2-flex class="item" v-for="n in orders.length" :key="n" :order="orders[n - 1]">
        {{ orders[n - 1] }}
      </d2-flex>
    </d2-flex>
  </demo-section>
</template>

<script>

export default {
  setup () {
    return {
      orders: [1, 4, 3, -2, 2, -1, 0]
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  @apply h-16 bg-indigo-500 rounded w-72;
  .item {
    @apply px-2 py-1 text-indigo-500 bg-white rounded;
  }
}
</style>
