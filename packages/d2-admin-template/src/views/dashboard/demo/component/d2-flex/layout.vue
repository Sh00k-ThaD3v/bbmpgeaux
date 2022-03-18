<route>
{
  "meta": {
    "d2admin.menu.title": "搭建布局"
  }
}
</route>

<template>
  <demo-section title="layout">
    <d2-flex class="layout" dir="top" box="justify">
      <div class="layout__header">header</div>
      <d2-flex class="layout__body" center>body</d2-flex>
      <div class="layout__footer">footer</div>
    </d2-flex>
  </demo-section>
  <demo-section title="layout">
    <d2-flex class="layout" box="first">
      <d2-flex class="layout__side" center>side</d2-flex>
      <d2-flex dir="top" box="justify">
        <div class="layout__header">header</div>
        <d2-flex class="layout__body" center>body</d2-flex>
        <div class="layout__footer">footer</div>
      </d2-flex>
    </d2-flex>
  </demo-section>
  <demo-section title="layout">
    <d2-flex class="layout" dir="top" box="first">
      <div class="layout__header">header</div>
      <d2-flex box="first">
        <d2-flex class="layout__side" center>side</d2-flex>
        <d2-flex dir="top" box="last">
          <d2-flex class="layout__body" center>body</d2-flex>
          <div class="layout__footer">footer</div>
        </d2-flex>
      </d2-flex>
    </d2-flex>
  </demo-section>
</template>

<style lang="scss" scoped>
.layout {
  @apply h-64 p-1 overflow-hidden text-lg bg-gray-700 rounded w-96;
  .layout__side {
    @apply w-24 text-white bg-gray-500;
  }
  .layout__header {
    @apply py-2 text-center text-gray-500 bg-gray-200;
  }
  .layout__footer {
    @apply py-2 text-center text-gray-500 bg-gray-300;
  }
  .layout__body {
    @apply text-gray-500 bg-gray-100;
  }
}
</style>
