import { fromPairs } from 'lodash-es'
import { isEmptyString } from './string.js'

export const nameSpace = 'd2'

export const colorNames = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

export const sizeNames = ['mini', 'small', 'large']

export const buttonTypes = ['button', 'submit', 'reset']

export const spaceNames = ['mini', 'base', 'small', 'large']

export const flexProps = {
  dir: ['top', 'right', 'bottom', 'left'],
  main: ['right', 'left', 'justify', 'center'],
  cross: ['top', 'bottom', 'baseline', 'center', 'stretch'],
  box: ['mean', 'first', 'last', 'justify'],
  content: ['start', 'end', 'center', 'between', 'around', 'stretch'],
  self: ['auto', 'top', 'bottom', 'baseline', 'center', 'stretch']
}

export const breakPointsName = ['sm', 'md', 'lg', 'xl', 'xxl']

export const breakPointsWidth = [640, 768, 1024, 1280, 1536]

export const breakPoints = fromPairs(breakPointsName.map((e, i) => [e, breakPointsWidth[i]]))

/**
 * Check a flex property is available
 * @param {string} type flex property type
 * @param {string} value flex property
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isFlex (type, value, empty) {
  return empty && isEmptyString(value) || flexProps[type] && flexProps[type].includes(value)
}

/**
 * Check a color name is available
 * @param {string} value color name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isColor (value, empty) {
  return empty && isEmptyString(value) || colorNames.includes(value)
}

/**
 * Check a space size name is available
 * @param {string} value size name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isSpace (value, empty) {
  return empty && isEmptyString(value) || spaceNames.includes(value)
}

/**
 * Check a button size name is available
 * @param {string} value size name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isSize (value, empty) {
  return empty && isEmptyString(value) || sizeNames.includes(value)
}

/**
 * Check a button type is available
 * @param {string} value type name
 * @param {boolean} empty allow empty string
 * @returns boolean
 */
export function isButtonTypes (value, empty) {
  return empty && isEmptyString(value) || buttonTypes.includes(value)
}
