import { fromPairs } from 'lodash-es'
import { defineStore } from 'pinia'
import { flattenMenus, getMenuId, getMenuUrl, getMenuPidIndex } from '@/utils/framework/menu.js'

export function defineD2AdminMenuStore (namespace) {
  return defineStore(namespace, {
    state: () => {
      return {
        // eg: [ tree, ... ]
        menus: []
      }
    },
    getters: {
      // eg: [ menu, ... ]
      flatMenus: state => {
        return flattenMenus(state.menus)
      },
      // eg: { id: flatMenusIndex, ... }
      menuIdIndex () {
        return fromPairs(this.flatMenus.map((e, i) => [getMenuId(e), i]))
      },
      // eg: { url: flatMenusIndex, ... }
      menuUrlIndex () {
        return fromPairs(this.flatMenus.map((e, i) => [getMenuUrl(e), i]).filter(e => e[0]))
      },
      // eg: { id: pid, ... }
      menuPidIndex () {
        return getMenuPidIndex(this.menus)
      }
    },
    actions: {
      /**
       * Set menus value
       * @param {array} value menus
       */
      setMenus (value) {
        this.menus = value
      },
      /**
       * Find menu item by menu id
       * @param {string} id menu id
       * @returns menu item
       */
      getMenuById (id) {
        return this.flatMenus[this.menuIdIndex[id]]
      },
      /**
       * Find menu item by menu url
       * @param {string} url menu url
       * @returns menu item
       */
      getMenuByUrl (url) {
        return this.flatMenus[this.menuUrlIndex[url]]
      },
      /**
       * Find the parent menu id of the menu
       * @param {string} id menu id
       * @returns parent menu id
       */
      getMenuPid (id) {
        return this.menuPidIndex[id]
      },
      /**
       * Find the all parent menus id of the menu
       * @param {string} id menu id
       * @returns parent menus id
       */
      getMenuPids (id) {
        const result = []
        const pid = this.getMenuPid(id)
        if (pid) {
          result.push(pid)
          result.push(...this.getMenuPids(pid))
        }
        return result
      }
    }
  })
}
