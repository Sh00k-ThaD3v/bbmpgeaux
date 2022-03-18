<route>
{
  "meta": {
    "d2admin.menu.title": "绝对定位"
  }
}
</route>

<style lang="scss" scoped>
.box {
  @apply absolute w-12 h-12 text-gray-100 bg-gray-500 cursor-pointer select-none;
}
</style>

<template>
  <d2-flex class="box top-0 left-0" center>LT</d2-flex>
  <d2-flex class="box top-0 right-0" center>RT</d2-flex>
  <d2-flex class="box bottom-0 left-0" center>LB</d2-flex>
  <d2-flex class="box bottom-0 right-0" center>RB</d2-flex>
</template>
