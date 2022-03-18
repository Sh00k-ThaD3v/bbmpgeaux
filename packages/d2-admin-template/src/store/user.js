import { defineStore } from 'pinia'

export const useD2AdminUserStore = defineStore('d2-admin-sys-user', {
  state: () => {
    return {
      userAvatar: 'https://p3-passport.byteacctimg.com/img/user-avatar/e7130f55d45d06a8106c9dbd0e3f0c18~300x300.image',
      userName: 'FairyEver'
    }
  }
})
