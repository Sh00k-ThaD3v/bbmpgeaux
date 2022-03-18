/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

/**
 * Find the first data that is not equal to the target value, if not found, return target
 * @param {*} target values for comparison
 * @param  {...any} value values to check
 * @returns {*} First result not equal to the target value
 * @example (1, 1, 1, 2) => 2
 * @example (1, 0, 2, 3) => 0
 * @example (1, 1, 1, 1) => 1
 */
export function getDifferent (target, ...value) {
  return value.find(e => e !== target) || target
}
