import { defineComponent, computed, provide, reactive, watch } from 'vue'
import classNames from 'classnames'
import { pick } from 'lodash-es'
import { useConfig } from '../../../use/config.js'
import { provideData } from '../../../use/provide.js'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'
import buttonProps from './props.js'

const propsNames = ['size', 'color', 'disabled', 'plain', 'ring', 'ringWidth', 'round', 'circle', 'text']

export const name = makeComponentName('button-group')
export const mainClassName = makeComponentClassName('button-group')

export default defineComponent({
  name,
  props: pick(buttonProps, propsNames),
  setup (props, { slots }) {
    const config = useConfig()

    provideData(name, props)

    const buttonGroupSize = computed(() => props.size || config.size)

    const buttonGroupClassName = computed(() => classNames(
      mainClassName,
      {
        [`${mainClassName}--${buttonGroupSize.value}`]: buttonGroupSize.value
      }
    ))
    
    return () =>
      <div class={ buttonGroupClassName.value }>
        { slots.default?.() }
      </div>
  }
})
