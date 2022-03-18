import { ref, computed, watch } from 'vue'
import { throttle } from 'lodash-es'

export function useDelay (defaultValue, wait = 1000) {
  const valueInside = ref(defaultValue)
  const valueExternal = ref(defaultValue)

  const updateValueExternal = throttle(() => {}, wait)

  const value = computed({
    get: () => valueExternal.value,
    set: newValue => { valueInside.value = newValue }
  })
  return value
}
