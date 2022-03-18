import { computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  getMenuId,
  getMenuTitle,
  getMenuIcon,
  getMenuUrl
} from '@/utils/framework/menu.js'

export function useMenu (menu) {
  const router = useRouter()

  const menuId = computed(() => getMenuId(menu))
  const menuTitle = computed(() => getMenuTitle(menu))
  const menuIcon = computed(() => getMenuIcon(menu))

  function navigateByMenu (menu) {
    router.push(getMenuUrl(menu))
  }

  return {
    menuId,
    menuTitle,
    menuIcon,
    navigateByMenu
  }
}
