import { provide, inject } from 'vue'

export function useContext () {
  const id = Symbol('context')
  const post = value => {
    provide(id, value)
  }
  const get = value => inject(id, value)
  return {
    provide: post,
    inject: get
  }
}
