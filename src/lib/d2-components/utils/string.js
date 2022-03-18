/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { isString, camelCase } from 'lodash-es'

/**
 * Check if it is string and not empty
 * @param {*} value value to check
 * @returns boolean
 */
export function isValuableString (value) {
  return isString(value) && !isEmptyString(value)
}

/**
 * Check if it is empty string
 * @param {*} value value to check
 * @returns boolean
 */
export function isEmptyString (value) {
  return value === ''
}

/**
 * Convert string to pascalcase
 * @param {string} value string to be processed
 * @returns string
 */
export function pascalCase (value) {
  return titleCase(camelCase(value))
}

/**
 * Convert string to titleCase
 * @param {string} value string to be processed
 * @returns string
 */
export function titleCase (value) {
  if (!isString(value)) return ''
  let _value = value.trim()
  if (_value.length < 2) return _value.toLocaleUpperCase()
  return _value[0].toLocaleUpperCase() + _value.slice(1)
}

/**
 * Check whether the content is two Chinese characters
 * @param {string} value string to check
 * @returns boolean
 */
export function isTwoCNChar (value) {
  return /^[\u4e00-\u9fa5]{2}$/.test(value)
}
