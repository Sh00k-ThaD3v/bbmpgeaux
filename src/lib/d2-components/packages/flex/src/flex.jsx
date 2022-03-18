import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { pickBy, isUndefined } from 'lodash-es'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import { isFlex, isSpace } from '../../../utils/const.js'
import { isNumberLike } from '../../../utils/number.js'

export const name = makeComponentName('flex')
export const mainClassName = makeComponentClassName('flex')

export default defineComponent({
  name,
  props: {
    // display
    inlineFlex: { type: Boolean },
    block: { type: Boolean },
    inline: { type: Boolean },
    inlineBlock: { type: Boolean },
    // flex parent attributes
    wrap: { type: Boolean },
    wrapR: { type: Boolean },
    dir: { type: String, default: '', validator: value => isFlex('dir', value, true) },
    main: { type: String, default: '', validator: value => isFlex('main', value, true) },
    cross: { type: String, default: '', validator: value => isFlex('cross', value, true) },
    box: { type: String, default: '', validator: value => isFlex('box', value, true) },
    content: { type: String, default: '', validator: value => isFlex('content', value, true) },
    // flex child attributes
    order: { type: [String, Number], validator: value => isNumberLike(value) },
    grow: { type: [String, Number], validator: value => isNumberLike(value) },
    shrink: { type: [String, Number], validator: value => isNumberLike(value) },
    self: { type: String, default: '', validator: value => isFlex('self', value, true) },
    // helper
    center: { type: Boolean },
    tag: { type: String, default: 'div' },
    // when the flex order attribute causes display disorder, please try not to use the space prop to set the space
    space: { type: [Boolean, String] }
  },
  setup (props, { slots }) {
    const flexCenter = computed(() => props.center ? 'center' : '')

    const flexMain = computed(() => flexCenter.value || props.main)

    const flexCross = computed(() => flexCenter.value || props.cross)

    const flexSpace = computed(() => {
      if (props.space === true) return 'base'
      if (isSpace(props.space)) return props.space
      return ''
    })

    const flexClassName = computed(() => classNames(
      mainClassName,
      {
        [`is-space-${props.dir || 'left'}-${flexSpace.value}`]: flexSpace.value,
        'is-inline-flex': props.inlineFlex,
        'is-block': props.block,
        'is-inline': props.inline,
        'is-inline-block': props.inlineBlock,
        'is-wrap': props.wrap,
        'is-wrap-r': props.wrapR,
        [`is-dir-${props.dir}`]: props.dir,
        [`is-main-${flexMain.value}`]: flexMain.value,
        [`is-cross-${flexCross.value}`]: flexCross.value,
        [`is-box-${props.box}`]: props.box,
        [`is-content-${props.content}`]: props.content,
        [`is-self-${props.self}`]: props.self
      }
    ))

    const flexStyle = computed(() => pickBy({
      order: props.order,
      flexGrow: props.grow,
      flexShrink: props.shrink
    }, value => !isUndefined(value)))
    
    return () =>
      <props.tag class={ flexClassName.value } style={ flexStyle.value }>
        { slots.default?.() }
      </props.tag>
  }
})
