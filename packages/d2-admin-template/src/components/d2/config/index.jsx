import { isFunction, keys, mapValues, isEqual, last, isUndefined } from 'lodash-es'
import { defineComponent, reactive, computed, watch } from 'vue'
import { useContext } from '@/use/context.js'
import { makeName } from '@d2-framework/d2-utils'
import { breakPoints } from '@/utils/const/break-point.js'

const name = 'config'

export const componentName = makeName(name)

const {
  provide,
  inject
} = useContext()

export const componentProps = {
  iconCollection: { type: String, default: '' },
  svgSymbolId: { type: String, default: '' },
  svgDir: { type: String, default: '' },
  breakPoints: { type: Object, default: () => breakPoints }
}

export const provideDataDefault = mapValues(
  componentProps,
  (_, key) => getDefault(key)
)

function getDefault (key) {
  const defaultConfig = componentProps?.[key]?.default
  if (isFunction(defaultConfig)) return defaultConfig()
  return defaultConfig
}

function getValid (key, ...values) {
  const defaultValue = getDefault(key)
  return values.find(e => !isEqual(defaultValue, e)) || last(values)
}

function getProvideData (props) {
  if (isUndefined(inject())) {
    return reactive({
      ...props
    })
  } else {
    const config = useConfig()
    return reactive(
      mapValues(
        props,
        (value, key) => getValid(key, value, config[key])
      )
    )
  }
}

export function useConfig () {
  const config = inject(provideDataDefault)
  const result = mapValues(
    componentProps,
    (_, key) => computed(() => config[key])
  )
  return reactive(result)
}

export default defineComponent({
  name: componentName,
  props: componentProps,
  setup (props, { slots }) {
    let provideData = getProvideData(props)
    keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })
    provide(provideData)
    return () => slots.default?.()
  }
})
