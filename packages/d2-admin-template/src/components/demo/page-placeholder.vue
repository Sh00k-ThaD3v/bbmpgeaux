<template>
  <d2-flex class="absolute inset-0" center dir="top">
    <span class="mb-2 text-4xl text-gray-300">
      <d2-icon name="icon-park-outline:bookmark"/>
    </span>
    <span class="text-xl text-gray-300 cursor-pointer select-none">
      {{ title }}
    </span>
  </d2-flex>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const route = useRoute()

    const title = computed(() => route.name)

    return {
      title
    }
  }
}
</script>
