import joinClassNames from 'classnames'
import { defineComponent, ref, unref, computed, watch, onBeforeUnmount, onMounted } from 'vue'
import { kebabCase, fromPairs, mergeWith, isFunction } from 'lodash'
import os from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'

export const osCallbacks = [
  'onInitialized',
  'onInitializationWithdrawn',
  'onDestroyed',
  'onScrollStart',
  'onScroll',
  'onScrollStop',
  'onOverflowChanged',
  'onOverflowAmountChanged',
  'onDirectionChanged',
  'onContentSizeChanged',
  'onHostSizeChanged',
  'onUpdated'
]

const osCallbackToEmitName = name => kebabCase(name.replace(/^on/, ''))

export const emits = [
  ...osCallbacks.map(osCallbackToEmitName),
  'scroll-top',
  'scroll-bottom'
]

const name = 'scroll'

export default defineComponent({
  name: 'D2Scroll',
  inheritAttrs: false,
  props: {
    options: { type: Object },
    extensions: { type: [String, Array, Object] },
    theme: { type: String, default: 'thin-dark' },
    full: { type: Boolean }
  },
  emits,
  setup (props, { emit, attrs }) {
    const scrollbarTarget = ref(null)

    const scrollbarVertical = ref(null)
    const scrollbarHorizontal = ref(null)

    const instance = ref(null)

    const isValid = () => os.valid(unref(instance))

    const optionsDefault = computed(() => ({
      className: `os-theme-${props.theme}`,
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 300
      },
      callbacks: fromPairs(osCallbacks.map(osCallbackName => {
        const emitName = osCallbackToEmitName(osCallbackName)
        let callback = () => emit(emitName, unref(instance))
        if (osCallbackName === 'onScroll') {
          callback = () => {
            emit(emitName, unref(instance))
            // More callback
            const ratioY = unref(instance).scroll().ratio.y
            if (ratioY === 0) emit('scroll-top', unref(instance))
            if (ratioY === 1) emit('scroll-bottom', unref(instance))
          }
        }
        return [osCallbackName, callback]
      }))
    }))

    function customizer (_, __, key) {
      if (key === 'callbacks') {
        return mergeWith({}, _, __, (oldFn, newFn) => {
          if (isFunction(oldFn) && isFunction(newFn)) {
            return event => {
              oldFn(event)
              newFn(event)
            }
          }
        })
      }
    }

    const merge = options => mergeWith({}, unref(optionsDefault), options, customizer)

    const options = computed(() => merge(props.options))

    function reloadOptions () {
      if (isValid()) {
        unref(instance).options(merge(options))
      }
    }

    function init () {
      instance.value = os(
        unref(scrollbarTarget),
        unref(options),
        props.extensions
      )
    }

    onMounted(init)
    
    onBeforeUnmount(() => {
      if (isValid()) {
        unref(instance).destroy()
        instance.value = null
      }
    })
    
    watch(options, reloadOptions)
    
    const classNames = computed(() => joinClassNames('d2-scroll', attrs.class))

    return {
      scrollbarTarget,
      scrollbarVertical,
      scrollbarHorizontal,
      classNames,
      instance
    }
  },
  render () {
    const {
      classNames
    } = this
    return (
      <div ref="scrollbarTarget" class="os-host" class={ classNames }>
        <div class="os-resize-observer-host"/>
        <div class="os-padding">
          <div class="os-viewport">
            <div class="os-content">
              { this.$slots?.default?.() }
            </div>
          </div>
        </div>
        <div ref="scrollbarHorizontal" class="os-scrollbar os-scrollbar-horizontal">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div ref="scrollbarVertical" class="os-scrollbar os-scrollbar-vertical">
          <div class="os-scrollbar-track">
            <div class="os-scrollbar-handle"/>
          </div>
        </div>
        <div class="os-scrollbar-corner"/>
      </div>
    )
  }
})
