import { defineComponent, computed } from 'vue'
import classNames from 'classnames'
import { makeComponentName, makeComponentClassName } from '../../../utils/make.js'

export const name = makeComponentName('test-item')
export const mainClassName = makeComponentClassName('test-item')

export default defineComponent({
  name,
  props: {},
  setup (props, { slots }) {
    const testItemClassName = computed(() => classNames(
      mainClassName,
      {}
    ))
    
    return () =>
      <div class={ testItemClassName.value }>
        <div>{ name }</div>
        <div>{ slots?.default?.() }</div>
      </div>
  }
})
