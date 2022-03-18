<style lang="scss" scoped>
.d2-scroll--demo {
  @apply border-2 border-gray-400 rounded bg-gray-50 w-60 h-60;
  .row {
    @apply px-1 py-1 text-gray-400 cursor-pointer;
  }
}
</style>

<route>
{
  "meta": {
    "d2admin.menu.title": "基础"
  }
}
</route>

<template>
  <d2-scroll class="d2-scroll--demo">
    <div class="row" v-for="n in 20" :key="n">
      n: {{ n }}
    </div>
  </d2-scroll>
</template>
