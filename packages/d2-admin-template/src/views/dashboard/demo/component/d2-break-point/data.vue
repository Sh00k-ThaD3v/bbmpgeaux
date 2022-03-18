<route>
{
  "meta": {
    "d2admin.menu.title": "绑定数据"
  }
}
</route>

<template>
  <demo-section title="break point">
    <d2-break-point :data="config" v-slot="status">
      <p class="info">
        <span class="label" :style="{ backgroundColor: status.data.color }">
          {{ status.data.color }}
        </span>
      </p>
      <demo-break-point-display :status="status"/>
    </d2-break-point>
  </demo-section>
</template>

<script>
export default {
  setup () {
    return {
      config: {
        color: [
          '#6B7280',
          {
            sm: '#EF4444',
            md: '#F59E0B',
            lg: '#10B981',
            xl: '#3B82F6',
            xxl: '#6366F1'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  @apply p-4 mb-8 text-center border border-gray-100 rounded cursor-pointer select-none bg-gray-50;
  .label {
    @apply px-4 py-2 text-white rounded-full;
  }
}
</style>
