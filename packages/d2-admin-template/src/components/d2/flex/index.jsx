import joinClassNames from 'classnames'
import { defineComponent, unref, computed } from 'vue'
import { pickBy, isUndefined } from 'lodash-es'
import { isNumberLike } from '@d2-framework/d2-utils'
import { makeName, makeClassName } from '@d2-framework/d2-utils'
import { isFlexProp } from '@/utils/const/flex.js'

import './flex.scss'

const name = 'flex'

export const componentName = makeName(name)
export const className = makeClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    // display
    inlineFlex: { type: Boolean },
    block: { type: Boolean },
    inline: { type: Boolean },
    inlineBlock: { type: Boolean },
    // flex parent attributes
    wrap: { type: Boolean },
    wrapR: { type: Boolean },
    dir: { type: String, default: '', validator: value => isFlexProp('dir', value, true) },
    main: { type: String, default: '', validator: value => isFlexProp('main', value, true) },
    cross: { type: String, default: '', validator: value => isFlexProp('cross', value, true) },
    box: { type: String, default: '', validator: value => isFlexProp('box', value, true) },
    content: { type: String, default: '', validator: value => isFlexProp('content', value, true) },
    // flex child attributes
    order: { type: [String, Number], validator: value => isNumberLike(value) },
    grow: { type: [String, Number], validator: value => isNumberLike(value) },
    shrink: { type: [String, Number], validator: value => isNumberLike(value) },
    self: { type: String, default: '', validator: value => isFlexProp('self', value, true) },
    // helper
    center: { type: Boolean },
    tag: { type: String, default: 'div' }
  },
  setup (props) {
    const center = computed(() => props.center ? 'center' : '')
    const main = computed(() => unref(center) || props.main)
    const cross = computed(() => unref(center) || props.cross)
    const classNames = computed(() => joinClassNames(
      className,
      {
        [`${className}--inline-flex`]: props.inlineFlex,
        [`${className}--block`]: props.block,
        [`${className}--inline`]: props.inline,
        [`${className}--inline-block`]: props.inlineBlock,
        [`${className}--wrap`]: props.wrap,
        [`${className}--wrap-r`]: props.wrapR,
        [`${className}--dir-${props.dir}`]: props.dir,
        [`${className}--main-${unref(main)}`]: unref(main),
        [`${className}--cross-${unref(cross)}`]: unref(cross),
        [`${className}--box-${props.box}`]: props.box,
        [`${className}--content-${props.content}`]: props.content,
        [`${className}--self-${props.self}`]: props.self
      }
    ))
    const style = computed(() => pickBy({
      order: props.order,
      flexGrow: props.grow,
      flexShrink: props.shrink
    }, value => !isUndefined(value)))
    return {
      classNames,
      style
    }
  },
  render () {
    const {
      classNames,
      style
    } = this
    const Tag = this.tag
    return (
      <Tag class={ classNames } style={ style }>
        { this.$slots?.default?.() }
      </Tag>
    )
  }
})
