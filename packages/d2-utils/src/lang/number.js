import { isNaN, isNumber } from 'lodash'

/**
 * Check if it can be converted to number
 * It is generally used for the verification of component props
 * Please set the data type on the component like 'type: [String, Number]'
 * @param {*} value value to check
 * @returns boolean
 */
export function isNumberLike (value) {
  return !isNaN(Number(value))
}

/**
 * Check whether a value is an integer and less than the given value
 * @param {*} value value to check
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndLessThan (value, max) {
  return isNumber(value) && Number.isInteger(value) && value < max
}

/**
 * Check whether a value is an integer and greater than the given value
 * @param {*} value value to check
 * @param {number} min min value
 * @returns boolean
 */
export function isIntegerAndGreaterThan (value, min) {
  return isNumber(value) && Number.isInteger(value) && value > min
}

/**
 * Check that the value is an integer and within the given range
 * @param {*} value value to check
 * @param {number} min min value
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndBetween (value, min, max) {
  return isNumber(value) && Number.isInteger(value) && value >= min && value <= max
}
