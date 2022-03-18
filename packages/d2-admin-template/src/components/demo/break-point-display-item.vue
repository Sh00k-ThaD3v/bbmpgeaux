<template>
  <d2-flex dir="top" cross="center" class="item">
    <d2-icon
      v-if="value"
      class="item__icon item__icon--active"
      name="akar-icons:circle-check-fill"
    />
    <d2-icon
      v-else
      class="item__icon"
      name="akar-icons:circle-x"
    />
    <span class="item__label">
      {{ name }}
    </span>
  </d2-flex>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    value: { type: Boolean },
    name: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.item {
  @apply p-2 rounded cursor-pointer select-none w-14;
  &:hover {
    @apply bg-green-500;
    .item__label {
      @apply text-white;
    }
    .item__icon {
      @apply text-white;
      &.item__icon--active {
        @apply text-white;
      }
    }
  }
  .item__label {
    @apply text-lg text-gray-500;
  }
  .item__icon {
    @apply text-2xl text-gray-300;
    &.item__icon--active {
      @apply text-green-500;
    }
  }
}
</style>
