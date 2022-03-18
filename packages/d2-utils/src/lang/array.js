import { get, omit, isArray } from 'lodash'

/**
 * Always return array
 * @param {*} value source value
 * @returns array
 */
export function safeArray (value) {
  return isArray(value) ? value : []
}

/**
 * Check whether the value passed in is a non empty array
 * @param {*} value source value
 * @returns boolean
 */
export function notEmptyArray (value) {
  return isArray(value) && value.length > 0
}

/**
 * Converts an array with a nested structure to a one-dimensional array
 * @param {array} source array structure consisting of objects
 * @param {string} childrenKey fields of child elements
 * @param {function} iterator can decide how to take values when saving each item
 * @returns {array} flatten array
 * @example
 *          from:
 *          [
 *            {
 *              id: '1',
 *              children: [
 *                {
 *                  id: '1-1',
 *                  children: [
 *                    { id: '1-1-1' },
 *                    { id: '1-1-2' }
 *                  ]
 *                },
 *                { id: '1-2' }
 *              ]
 *            },
 *            { id: '2' }
 *          ]
 *          to:
 *          [
 *            { id: '1' },
 *            { id: '1-1' },
 *            { id: '1-1-1' },
 *            { id: '1-1-2' },
 *            { id: '1-2' },
 *            { id: '2' }
 *          ]
 */
export function flattenObjectArray (
  source = [],
  childrenKey = 'children',
  iterator = (item, _) => omit(item, [childrenKey])
) {
  const result = []
  safeArray(source).forEach((item, index) => {
    result.push(iterator(item, index))
    const children = get(item, childrenKey)
    if (notEmptyArray(children)) {
      result.push(...flattenObjectArray(children, childrenKey, iterator))
    }
  })
  return result
}
