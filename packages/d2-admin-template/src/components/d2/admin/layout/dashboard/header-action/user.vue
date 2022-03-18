<template>
  <d2-flex v-if="fullMode" class="header__button header__button--padding-text-left" tag="button" center>
    <span>{{ userName }}</span>
    <d2-flex class="is-square" center>
      <a-avatar size="small" :src="userAvatar"/>
    </d2-flex>
  </d2-flex>
  <d2-flex v-else-if="textMode" class="header__button header__button--padding-text" tag="button" center>
    Welcome, {{ userName }}
  </d2-flex>
  <d2-flex v-else-if="iconMode" class="header__button header__button--icon" tag="button" center>
    <a-avatar size="small" :src="userAvatar"/>
  </d2-flex>
</template>

<script>
import { makeNameByUrl } from '@d2-framework/d2-utils'
import { computed, unref } from 'vue'
import { storeToRefs } from 'pinia'
import { useD2AdminLayoutDashboardStore } from '@/components/d2/admin/layout/dashboard/store/index.js'
import { useD2AdminUserStore } from '@/store/user.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const d2AdminUserStore = useD2AdminUserStore()
    const {
      userAvatar,
      userName
    } = storeToRefs(d2AdminUserStore)

    const d2AdminLayoutDashboardStore = useD2AdminLayoutDashboardStore()
    const {
      showUserName,
      showUserAvatar
    } = storeToRefs(d2AdminLayoutDashboardStore)

    const fullMode = computed(() => unref(showUserName) && unref(showUserAvatar))
    const textMode = computed(() => unref(showUserName) && !unref(showUserAvatar))
    const iconMode = computed(() => unref(showUserAvatar) && !unref(showUserName))

    return {
      userAvatar,
      userName,
      fullMode,
      textMode,
      iconMode
    }
  }
}
</script>
