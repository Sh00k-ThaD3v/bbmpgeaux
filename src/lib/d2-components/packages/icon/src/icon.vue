<template>
  <span :class="iconClassName" ref="container">
    <slot></slot>
  </span>
</template>

<script>
import { ref, unref, onMounted, watch, nextTick, computed } from 'vue'
import Iconify from '@iconify/iconify'
import classNames from 'classnames'
import { useConfig } from '../../../use/config.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { inject } from '../../../utils/provide.js'
import { name as iconGroupName } from './icon-group.vue'

export const name = makeComponentName('icon')
export const mainClassName = makeComponentClassName('icon')

export default {
  name,
  props: {
    collection: { type: String, default: '' },
    icon: { type: String, default: '' },
    spin: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const config = useConfig()

    const injectCollectionFromIconGroup = inject(iconGroupName, 'collection')

    // icon container ref
    const container = ref(null)

    // computed icon name [collection]:[icon]
    const icon = computed(() => {
      const _icon = props.icon || getIconNameFromSlot() || ''
      if (!_icon) {
        console.warn('Please set the icon name')
        return ''
      }
      if (_icon.indexOf(':') < 0) {
        // The icon name does not contain the icon collection name
        // Try to get it from another way
        const collection = props.collection || unref(injectCollectionFromIconGroup) || config.iconCollection
        return collection ? `${collection}:${_icon}` : _icon
      }
      return _icon
    })

    // class names for container
    const iconClassName = computed(() => classNames(
      mainClassName,
      {
        'd2-animate-spin': props.spin
      }
    ))

    /**
     * get icon name from slot default
     */
    function getIconNameFromSlot () {
      if (slots.default) {
        return slots.default()?.[0]?.children || ''
      }
      return ''
    }

    /**
     * try clear container
     */
    function clear () {
      const dom = unref(container)
      if (dom) dom.innerHTML = ''
    }

    /**
     * refresh icon
     */
    async function reload () {
      clear()
      // check container
      const dom = unref(container)
      if (!dom) return
      // check icon
      const _icon = unref(icon)
      if (!_icon) return clear()
      // render
      await nextTick()
      const svg = Iconify.renderSVG(_icon, {})
      if (svg) {
        dom.appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = _icon
        dom.appendChild(span)
      }
    }

    // reload on mounted
    onMounted(() => reload())
    // reload on icon changed
    watch(icon, reload, { flush: 'post' })
    // reload on slots changed
    watch(() => slots.default, reload, { flush: 'post' })

    return {
      container,
      iconClassName
    }
  }
}
</script>
