import joinClassNames from 'classnames'
import { defineComponent, unref, computed } from 'vue'
import { omitBy, isEmpty, isNumber } from 'lodash-es'
import { useConfig } from '@/components/d2/config/use.js'
import { makeName, makeClassName } from '@d2-framework/d2-utils'
import { px } from '@d2-framework/d2-utils'
import { componentName as configComponentName } from '@/components/d2/config/index.jsx'

const name = 'svg'

const componentName = makeName(name)
const className = makeClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    symbolId: { type: String, default: '' },
    dir: { type: String, default: '' },
    name: { type: String, default: '' },
    height: { type: [String, Number], default: '' },
    width: { type: [String, Number], default: '' },
    size: { type: [String, Number], default: '' }
  },
  setup (props) {
    const { svgSymbolId, svgDir } = useConfig()

    const symbolId = computed(() => props.symbolId || svgSymbolId)

    if (!unref(symbolId)) {
      console.warn(`symbolId cannot be empty, please pass the 'symbolId' prop for ${componentName} component. or wrap with ${configComponentName} component on the outer layer, and pass the 'svgSymbolId' prop for ${configComponentName} component`)
    }

    const dir = computed(() => props.dir || svgDir)

    const href = computed(() => {
      let _href = '#' + unref(symbolId)
        .replace(/\[dir\]/g, unref(dir))
        .replace(/\[name\]/g, props.name)
      if (!unref(dir)) {
        _href = _href.replace('--', '-')
      }
      return _href
    })

    const height = computed(() => {
      const value = props.height || props.size
      return isNumber(value) ? px(value) : value
    })
    const width = computed(() => {
      const value = props.width || props.size
      return isNumber(value) ? px(value) : value
    })

    const style = computed(() => omitBy({
      height: unref(height),
      width: unref(width)
    }, isEmpty))

    const classNames = computed(() => joinClassNames(className, {
      // Prepare for future extended styles
    }))

    return {
      style,
      classNames,
      href
    }
  },
  render () {
    const {
      style,
      classNames,
      href
    } = this
    return (
      <svg
        class={ classNames }
        style={ style }
        aria-hidden="true"
      >
        <use xlink:href={ href }/>
      </svg>
    )
  }
})
