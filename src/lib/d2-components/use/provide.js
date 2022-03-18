import { provide, watch, reactive } from 'vue'

export function provideData (name, data) {
  const _data = reactive({
    ...data
  })

  provide(name, _data)

  Object.keys(data).forEach(key => {
    watch(
      () => data[key],
      () => {
        _data[key] = data[key]
      }
    )
  })
}
