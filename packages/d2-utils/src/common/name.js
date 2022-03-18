import { pascalCase } from '../lang/string.js'
import { id } from './id.js'
import { kebabCase } from 'lodash'

/**
 * Format component name
 * @param {string} name simple component name has no prefix
 *                      eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'D2FooBar'
 */
export function makeName (name) {
  return pascalCase(`d2-${name}`)
}

/**
 * Randomly generate a component name
 * @returns {string} component name. eg: 'D2Aisjkxuednj'
 */
export function makeRandomName () {
  return makeName(id())
}

/**
 * Format component name by component file url
 * @param {string} url component file url
 * @returns {string} component name. eg: 'D2FooBar'
 */
export function makeNameByUrl (url) {
  const name = (new URL(url)).pathname
    .replace(/^\/src\/components\//, '')
    .replace(/(\/index)?\.(vue|js|jsx)$/, '')
  return makeName(name)
}

/**
 * Format component main class name
 * @param {string} name simple component name has no prefix
 *                      eg 'Foo Bar' 'fooBar' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'd2-foo-bar'
 */
export function makeClassName (name) {
  return `d2-${kebabCase(name)}`
}

/**
 * Format component main class name by component file url
 * @param {string} url component file url
 * @returns {string} component name. eg: 'd2-foo-bar'
 */
export function makeClassNameByUrl (url) {
  return kebabCase(makeNameByUrl(url)).replace(/-(\d)/g, '$1')
}
