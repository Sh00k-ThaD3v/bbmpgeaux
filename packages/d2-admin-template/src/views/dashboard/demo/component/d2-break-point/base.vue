<route>
{
  "meta": {
    "d2admin.menu.title": "基础"
  }
}
</route>

<template>
  <demo-section title="break point">
    <d2-break-point #default="status">
      <demo-break-point-display :status="status"/>
    </d2-break-point>
  </demo-section>
</template>
