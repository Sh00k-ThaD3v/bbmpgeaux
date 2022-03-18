<route>
{
  "meta": {
    "d2admin.menu.title": "显示模式"
  }
}
</route>

<template>
  <demo-section title="default">
    <d2-flex class="flex" space>
      <div class="flex__item" v-for="n in 3" :key="n"></div>
    </d2-flex>
  </demo-section>
  <demo-section title="inline-flex">
    <d2-flex class="flex" inline-flex space>
      <div class="flex__item" v-for="n in 3" :key="n"></div>
    </d2-flex>
  </demo-section>
  <demo-section title="inline">
    <d2-flex class="flex" inline>
      <span class="flex__item" v-for="n in 3" :key="n">{{ n }}</span>
    </d2-flex>
  </demo-section>
  <demo-section title="inline-block">
    <d2-flex class="flex" inline-block>
      <span class="flex__item" v-for="n in 3" :key="n">{{ n }}</span>
    </d2-flex>
  </demo-section>
  <demo-section title="block">
    <d2-flex class="flex" block>
      <div class="flex__item" v-for="n in 3" :key="n"></div>
    </d2-flex>
  </demo-section>
</template>

<style lang="scss" scoped>
.flex {
  @apply w-24 h-24 p-1 mb-4 mr-4 bg-gray-100 rounded;
  .flex__item {
    @apply p-1 text-white bg-indigo-500 rounded-sm;
  }
}
</style>
