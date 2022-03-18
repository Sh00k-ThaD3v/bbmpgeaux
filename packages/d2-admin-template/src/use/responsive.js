import { computed, unref } from 'vue'
import { keys } from 'lodash-es'
import { useBreakPoint } from '@/use/break-point.js'

/**
 * Match data based on size
 * @param {*} data default data
 * @param {*} dataSet set of datas matched by size
 * @returns a matched data
 */
export function useResponsive (data, dataSet = {}, state) {
  const { breakPointsDict, breakPoints, activeWidth } = state || useBreakPoint()
  const responsiveData = computed(() => {
    const activeName = breakPointsDict[
      Math.max(
        ...keys(dataSet)
          .map(k => breakPoints[k])
          .filter(w => w <= unref(activeWidth))
      )
    ]
    return dataSet[activeName] || data
  })
  return responsiveData
}
