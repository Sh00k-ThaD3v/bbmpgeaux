<template>
  <d2-scroll ref="scrollbarRef" :class="bodyClassNames">
    <div class="main__inner" :style="mainInnerStyle">
      <slot/>
    </div>
  </d2-scroll>
  <div v-if="headerActive" ref="headerRef" :class="headerClassNames">
    <slot name="header"/>
  </div>
  <div v-if="footerActive" ref="footerRef" :class="footerClassNames">
    <slot name="footer"/>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref, unref, watchPostEffect } from 'vue'
import { useCssVar, useElementBounding } from '@vueuse/core'
import joinClassNames from 'classnames'
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { px, convertCssUnit } from '@d2-framework/d2-utils'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    headerBorder: { type: Boolean, default: false, required: false },
    footerBorder: { type: Boolean, default: false, required: false }
  },
  setup (props, { slots }) {
    const scrollbarRef = ref(null)
    const headerRef = ref(null)
    const footerRef = ref(null)

    const headerActive = ref(false)
    const footerActive = ref(false)

    const { height: bodyHeaderHeight } = useElementBounding(headerRef)
    const { height: bodyFooterHeight } = useElementBounding(footerRef)

    const cssVarHeaderHeight = computed(() => convertCssUnit(unref(useCssVar('--d2-admin-layout-dashboard-header-height'))))
    const cssVarHeaderBorderWidth = computed(() => convertCssUnit(unref(useCssVar('--d2-admin-layout-dashboard-header-border-width'))))
    const cssVarBodyPaddingY = computed(() => convertCssUnit(unref(useCssVar('--d2-admin-layout-dashboard-body-main-padding-y'))))
    const bodyTopBase = computed(() => unref(cssVarHeaderHeight) + unref(cssVarHeaderBorderWidth))
    const scrollbarVerticalTop = computed(() => unref(bodyTopBase) + unref(bodyHeaderHeight))

    const mainInnerStyle = computed(() => {
      const paddingTop = px(unref(bodyHeaderHeight) + (props.headerBorder ? unref(cssVarBodyPaddingY) : 0))
      const paddingBottom = px(unref(bodyFooterHeight) + (props.footerBorder ? unref(cssVarBodyPaddingY) : 0))
      return {
        ...(unref(headerActive) ? { paddingTop } : {}),
        ...(unref(footerActive) ? { paddingBottom } : {})
      }
    })

    const bodyClassNames = computed(() => joinClassNames('body__main', {
      'body__main--with-header-ghost': unref(headerActive) && !props.headerBorder,
      'body__main--with-footer-ghost': unref(footerActive) && !props.footerBorder
    }))

    const headerClassNames = computed(() => joinClassNames('body__header', 'layout-blur--body', {
      'body__header--border': props.headerBorder
    }))

    const footerClassNames = computed(() => joinClassNames('body__footer', 'layout-blur--body', {
      'body__footer--border': props.footerBorder
    }))

    function refreshSlotStatus () {
      headerActive.value = !!slots.header
      footerActive.value = !!slots.footer
      if (!unref(headerActive)) {
        bodyHeaderHeight.value = 0
      }
      if (!unref(footerActive)) {
        bodyFooterHeight.value = 0
      }
    }

    refreshSlotStatus()
    
    onUpdated(() => {
      refreshSlotStatus()
    })
    
    onMounted(() => {
      watchPostEffect(() => {
        scrollbarRef.value.scrollbarVertical.style.top = px(unref(scrollbarVerticalTop))
      })
      watchPostEffect(() => {
        scrollbarRef.value.scrollbarVertical.style.bottom = px(unref(bodyFooterHeight))
      })
    })

    return {
      scrollbarRef,
      headerRef,
      footerRef,
      mainInnerStyle,
      bodyClassNames,
      headerClassNames,
      footerClassNames,
      headerActive,
      footerActive
    }
  }
}
</script>
