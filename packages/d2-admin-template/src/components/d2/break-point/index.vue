<template>
  <slot v-bind="scope"/>
</template>

<script>
import { unref, reactive, defineComponent, computed } from 'vue'
import { mapValues } from 'lodash-es'
import { makeName } from '@d2-framework/d2-utils'
import { useBreakPoint } from '@/use/break-point.js'
import { useResponsive } from '@/use/responsive.js'

const name = 'break-point'

export const componentName = makeName(name)

export default defineComponent({
  name: componentName,
  props: {
    // example
    //   {
    //     foo: ['foo min', { sm: 'foo sm', md: 'foo md' }],
    //     bar: ['bar min', { sm: 'bar sm', lg: 'bar lg' }]
    //   }
    // return
    //   on min status:
    //     { foo: 'foo min', bar: 'bar min' }
    //   on md status:
    //     { foo: 'foo md', bar: 'bar sm' }
    //   on xl status:
    //     { foo: 'foo md', bar: 'bar lg' }
    data: { type: Object, default: () => ({}) },
    breakPoints: { type: Object }
  },
  setup (props) {
    const state = useBreakPoint(props.breakPoints)

    const responsiveData = computed(
      () => mapValues(
        props.data,
        (_, k) => {
          const [data, dataSet = {}] = props.data[k]
          return unref(useResponsive(data, dataSet, state))
        }
      )
    )

    const scope = computed(() => ({
      ...reactive(state),
      data: unref(responsiveData)
    }))
    
    return {
      scope
    }
  }
})
</script>
