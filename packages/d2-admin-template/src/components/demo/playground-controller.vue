<template>
  <p class="title">
    {{ label }}
  </p>
  <section class="body">
    <a-button
      v-for="item in options"
      :key="item"
      :type="value === item ? 'primary' : ''"
      size="mini"
      @click="onClick(item)"
    >
      <d2-icon
        v-if="buttonIcon(item)"
        :name="buttonIcon(item)"
      />
      {{ buttonLabel(item) }}
    </a-button>
  </section>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    label: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    value: { type: [String, Boolean], default: '' }
  },
  emits: [
    'update:value'
  ],
  setup (props, { emit }) {
    function onClick (item) {
      emit('update:value', item)
    }
    function buttonLabel (item) {
      switch (item) {
        case true: return '';
        case false: return '';
        case '': return 'default';
        default: return item
      }
    }
    function buttonIcon (item) {
      switch (item) {
        case true: return 'icon-park-outline:check';
        case false: return 'icon-park-outline:close';
        default: return ''
      }
    }
    return {
      onClick,
      buttonLabel,
      buttonIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @apply mb-2 text-gray-500;
}
.body {
  @apply mb-2;
}
</style>
