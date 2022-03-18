import { computed, ref, unref } from 'vue'

export function useSwitch (
  defaultValue = false,
  {
    trueValue = true,
    falseValue = false
  } = {}
) {
  const value = ref(defaultValue ? trueValue : falseValue)

  function toggle () {
    if (unref(isTrue)) {
      switchFalse()
    } else {
      switchTrue()
    }
  }

  function switchTrue () {
    value.value = trueValue
  }

  function switchFalse () {
    value.value = falseValue
  }

  const isTrue = computed(() => unref(value) === trueValue)
  const isFalse = computed(() => unref(value) === falseValue)

  return {
    value,
    toggle,
    switchTrue,
    switchFalse,
    isTrue,
    isFalse
  }
}
