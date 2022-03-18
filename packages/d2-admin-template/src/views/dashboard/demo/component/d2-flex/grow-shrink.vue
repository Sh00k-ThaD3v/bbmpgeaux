<route>
{
  "meta": {
    "d2admin.menu.title": "伸缩"
  }
}
</route>

<template>
  <demo-section title="grow">
    <d2-flex v-for="(configValue, configIndex) in configGrow" :key="configIndex" class="group group--grow" space>
      <template v-for="(setting, settingIndex) in configValue" :key="settingIndex">
        <d2-flex v-if="setting !== undefined" class="item item--grow" :grow="setting" flex center>{{ setting }}</d2-flex>
        <d2-flex v-else class="item item--grow" flex center>x</d2-flex>
      </template>
    </d2-flex>
  </demo-section>
  <demo-section title="shrink">
    <d2-flex v-for="(configValue, configIndex) in configShrink" :key="configIndex" class="group group--shrink" space>
      <template v-for="(setting, settingIndex) in configValue" :key="settingIndex">
        <d2-flex v-if="setting !== undefined" class="item item--shrink" :shrink="setting" flex center>{{ setting }}</d2-flex>
        <d2-flex v-else class="item item--shrink" flex center>x</d2-flex>
      </template>
    </d2-flex>
  </demo-section>
</template>

<script>

export default {
  setup () {
    return {
      configGrow: [
        [1, 1, 0, 1, 1],
        [1, 1, undefined, 1, 1],
        [2, 2, 0, 2, 2],
        [2, 1, 0, 1, 2],
        [1, 2, 3, 4, 5],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [undefined, undefined, undefined, undefined, 1]
      ],
      configShrink: [
        [1, 1, 0, 1, 1],
        [1, 1, undefined, 1, 1],
        [2, 2, 0, 2, 2],
        [2, 1, 0, 1, 2],
        [1, 2, 3, 4, 5],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [undefined, undefined, undefined, undefined, 1]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  @apply p-1 mb-4 bg-gray-200 rounded;
  &.group--grow {}
  &.group--shrink {
    @apply w-96;
  }
  .item {
    @apply h-10 p-1 text-white bg-gray-500 rounded;
    &.item--grow {
      @apply w-10;
    }
    &.item--shrink {
      @apply w-64;
    }
  }
}
</style>
