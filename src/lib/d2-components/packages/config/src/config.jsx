import { defineComponent, provide, reactive, watch } from 'vue'
import { makeComponentName } from '../../../utils/make.js'
import { breakPoints } from '../../../utils/const.js'

export const name = makeComponentName('config')

export default defineComponent({
  name,
  props: {
    svgPrefix: { type: String, default: '' },
    svgNames: { type: Array, default: () => [] },
    size: { type: String, default: '' },
    iconCollection: { type: String, default: '' },
    windowResizeThrottleWait: { type: Number, default: 100 },
    breakPoints: { type: Object, default: () => breakPoints }
  },
  setup (props, { slots }) {
    const provideData = reactive({
      ...props
    })
    Object.keys(props).forEach(key => {
      watch(
        () => props[key],
        () => {
          provideData[key] = props[key]
        }
      )
    })
    provide(name, provideData)
    return () => slots.default && slots.default()
  }
})
