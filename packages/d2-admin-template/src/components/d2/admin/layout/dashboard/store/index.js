import { defineStore } from 'pinia'

export const useD2AdminLayoutDashboardStore = defineStore('d2-admin-layout-dashboard', {
  state: () => {
    return {
      collapsed: false,
      collapseIconNormal: 'icon-park-outline:expand-right',
      collapseIconCollapsed: 'icon-park-outline:expand-left',
      showUserName: true,
      showUserAvatar: true
    }
  },
  getters: {
    collapseIcon () {
      return this.collapsed ? this.collapseIconCollapsed : this.collapseIconNormal
    }
  },
  actions: {
    collapsedToggle () {
      this.collapsed = !this.collapsed
    }
  }
})
