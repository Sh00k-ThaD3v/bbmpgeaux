<route>
{
  "meta": {
    "d2admin.menu.title": "嵌套"
  }
}
</route>

<template>
  <demo-section title="nesting with out d2-flex if no special settings">
    <d2-flex class="outer" cross="center" box="mean" space>
      <div class="inner">
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </div>
      <d2-flex class="inner" cross="center" box="mean">
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
    </d2-flex>
  </demo-section>
  <demo-section title="nesting by d2-flex and has special settings">
    <d2-flex class="outer" cross="center" box="mean" space>
      <d2-flex class="inner" self="bottom" block>
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
      <d2-flex class="inner" cross="center" box="mean">
        <div v-for="n in 3" :key="n">{{ n }}</div>
      </d2-flex>
    </d2-flex>
  </demo-section>
</template>

<style lang="scss" scoped>
.outer {
  @apply p-1 bg-indigo-500 rounded w-36 h-36;
  .inner {
    @apply p-1 text-center text-indigo-500 bg-white rounded;
  }
}
</style>
