import { unref, computed } from 'vue'
import { values, mapValues, invert } from 'lodash-es'
import { useWindowSize } from '@vueuse/core'
import { useConfig } from '@/components/d2/config/use.js'

/**
 * Get breakpoint status
 * @param {object} breakPointsParam break point setting, if do not set this parameter, use global config
 *                             eg: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }
 * @returns {object} status {string} breakPoint now active break point name
 * @returns {object} status {string} ...breakPointsParam.keys active state of each breakpoint
 * @returns {object} status {string} min less than the minimum breakpoint
 */
export function useBreakPoint (breakPointsParam) {
  const { width } = useWindowSize()

  const { breakPoints: breakPointsConfig } = useConfig()
  
  const breakPoints = Object.assign(
    {},
    breakPointsParam || breakPointsConfig,
    { min: 0 }
  )

  const widths = values(breakPoints).sort((a, b) => a - b)
  const breakPointsDict = invert(breakPoints)

  const activeWidth = computed(() => widths.reduce((r, e) => unref(width) >= e ? e : r, 0))
  const activeName = computed(() => breakPointsDict[unref(activeWidth)])

  const status = mapValues(breakPoints, (v, k) => computed(() => unref(activeName) === k))

  return {
    breakPoints,
    breakPointsDict,
    active: activeName,
    activeWidth,
    ...status
  }
}
