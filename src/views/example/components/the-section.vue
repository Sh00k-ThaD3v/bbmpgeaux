<template>
  <section class="my-4">
    <h2 class="mb-4 text-lg text-gray-500 select-none">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }  
}
</script>
