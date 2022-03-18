<template>
  <!-- side -->
  <d2-flex class="layout__side" dir="top">
    <d2-scroll class="side__scroll">
      <div class="side__container">
        <d2-admin-layout-dashboard-menu-side/>
      </div>
    </d2-scroll>
  </d2-flex>
  <!-- body -->
  <div class="layout__body">
    <d2-admin-layout-dashboard-container v-if="!isCustomBody">
      <router-view/>
    </d2-admin-layout-dashboard-container>
    <router-view v-else/>
  </div>
  <!-- header -->
  <div class="layout__header-background layout-blur--app"/>
  <d2-flex class="layout__header" dir="left" box="justify">
    <d2-flex class="header__button-group">
      <d2-flex class="header__button header__button--icon" tag="button" @click="collapsedToggle" center>
        <d2-icon :name="collapseIcon"/>
      </d2-flex>
    </d2-flex>
    <d2-admin-layout-dashboard-menu-header/>
    <d2-flex class="header__button-group" dir="right">
      <d2-admin-layout-dashboard-header-action-user/>
      <d2-admin-layout-dashboard-header-action-control/>
      <d2-admin-layout-dashboard-header-action-lock/>
      <d2-admin-layout-dashboard-header-action-news/>
    </d2-flex>
  </d2-flex>
  <!-- logo -->
  <div class="layout__logo">
    <d2-flex class="h-full w-full" center>
      Dashboard
    </d2-flex>
  </div>
  <!-- footer -->
  <div class="layout__footer layout-blur--app">
    <slot name="footer"/>
  </div>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from '@d2-framework/d2-utils'
import { get } from 'lodash-es'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useD2AdminLayoutDashboardStore } from '@/components/d2/admin/layout/dashboard/store/index.js'
import { useD2AdminUserStore } from '@/store/user.js'

import './style/index.scss'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const className = makeClassNameByUrl(import.meta.url)

    const d2AdminLayoutDashboardStore = useD2AdminLayoutDashboardStore()
    const { collapsedToggle } = d2AdminLayoutDashboardStore
    const {
      collapsed,
      collapseIcon
    } = storeToRefs(d2AdminLayoutDashboardStore)
    
    const d2AdminUserStore = useD2AdminUserStore()
    const {
      userAvatar,
      userName
    } = storeToRefs(d2AdminUserStore)

    const route = useRoute()
    const isCustomBody = computed(() => get(route.meta, 'd2admin.layout.dashboard.customBody', false))

    return {
      className,
      userAvatar,
      userName,
      isCustomBody,
      collapsed,
      collapseIcon,
      collapsedToggle
    }
  }
}
</script>
