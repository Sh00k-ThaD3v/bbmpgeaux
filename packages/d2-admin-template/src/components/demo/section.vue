<template>
  <section class="m-4">
    <h2 class="mb-4 text-lg text-gray-500 select-none">
      {{ title }}
    </h2>
    <slot/>
  </section>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    title: {
      type: String,
      default: ''
    }
  }  
}
</script>
