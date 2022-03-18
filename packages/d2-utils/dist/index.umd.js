(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('nanoid'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'nanoid', 'lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.D2Utils = {}, global.nanoid, global.lodash));
})(this, (function (exports, nanoid, lodash) { 'use strict';

  const isElement = el => {
    return typeof HTMLElement === 'object' ?
      el instanceof HTMLElement :
      el && typeof el === 'object' && typeof el.nodeName === 'string' && el.nodeType === 1
  };

  function clearElement (el) {
    if (isElement(el)) {
      el.innerHTML = '';
    }
  }

  /**
   * Converts value to a number and add px unit
   * @param {string|number} value original value
   * @param {string} unit css unit name
   * @returns {string} css value with unit
   * @example px(14) => '14px'
   * @example px('14') => '14px'
   * @example px('1em') => '1px'
   */
  function px (value) {
    return value ? `${parseFloat(value)}px` : ''
  }

  /**
   * Get element style
   * @param {HTMLElement} element target element
   * @param {string} name css prop name
   * @returns {*}
   */
  function getStyle (element, name) {
    const style = window.getComputedStyle ? getComputedStyle(element, null) : element.currentStyle;
    return name ? style[name] : style
  }

  /**
   * Convert CSS units into Number values
   * @link https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/angle
   * @param {string} cssValue
   * @param {null|HTMLElement} target used for relative units.
   * @return {*}
   */
  function convertCssUnit (cssValue, target) {
    target = target || document.body;
    const units = {
      // Absolute sizes
      'px': value => value,
      'cm': value => value * 38,
      'mm': value => value * 3.8,
      'q': value => value * 0.95,
      'in': value => value * 96,
      'pc': value => value * 16,
      'pt': value => value * 1.333333,
      // Relative sizes
      'rem': value => value * parseFloat(getStyle(document.documentElement, 'fontSize')),
      'em': value => value * parseFloat(getStyle(target, 'fontSize')),
      'vw': value => value / 100 * window.innerWidth,
      'vh': value => value / 100 * window.innerHeight,
      // Times
      'ms': value => value,
      's': value => value * 1000,
      // Angles
      'deg': value => value,
      'rad': value => value * (180 / Math.PI),
      'grad': value => value * (180 / 200),
      'turn': value => value * 360
    };
    // Match positive and negative numbers including decimals with preceeding unit
    const pattern = new RegExp(`^([\-\+]?(?:\\d+(?:\\.\\d+)?))(${ Object.keys(units).join('|') })$`, 'i');
    // If is a match, return example: [ '-2.75rem', '-2.75', 'rem' ]
    const matches = String.prototype.toString.apply(cssValue).trim().match(pattern);
    if (matches) {
      const value = Number(matches[1]);
      const unit = matches[2].toLocaleLowerCase();
      // Sanity check, make sure unit conversion function exists
      if (unit in units) {
        return units[unit](value)
      }
    }
    return cssValue
  }

  class FrameworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Error From D2Framework';
    }
  }

  function throwError (scope, message) {
    throw new FrameworkError(`[${scope}] ${message}`)
  }

  function warn(scope, message) {
    console.warn(new FrameworkError(`[${scope}] ${message}`));
  }

  const id = nanoid.customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);

  /**
   * Check if it is string and not empty
   * @param {*} value value to check
   * @returns boolean
   */
  function isValuableString (value) {
    return lodash.isString(value) && !isEmptyString(value)
  }

  /**
   * Check if it is empty string
   * @param {*} value value to check
   * @returns boolean
   */
  function isEmptyString (value) {
    return value === ''
  }

  /**
   * Convert string to pascalcase
   * @param {string} value string to be processed eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__'
   * @returns string eg: 'FooBar'
   */
  function pascalCase (value) {
    return titleCase(lodash.camelCase(value))
  }

  /**
   * Converts the first letter of the input string to uppercase
   * @param {string} value string to be processed eg: 'foo-bar'
   * @returns string eg: 'Foo-bar'
   */
  function titleCase (value) {
    if (!lodash.isString(value)) return ''
    let _value = value.trim();
    if (_value.length < 2) return _value.toLocaleUpperCase()
    return _value[0].toLocaleUpperCase() + _value.slice(1)
  }

  /**
   * Check whether the content is two Chinese characters
   * @param {string} value string to check
   * @returns boolean
   */
  function isTwoCNChar (value) {
    return /^[\u4e00-\u9fa5]{2}$/.test(value)
  }

  /**
   * Format component name
   * @param {string} name simple component name has no prefix
   *                      eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__' 'foo/bar'
   * @returns {string} component name. eg: 'D2FooBar'
   */
  function makeName (name) {
    return pascalCase(`d2-${name}`)
  }

  /**
   * Randomly generate a component name
   * @returns {string} component name. eg: 'D2Aisjkxuednj'
   */
  function makeRandomName () {
    return makeName(id())
  }

  /**
   * Format component name by component file url
   * @param {string} url component file url
   * @returns {string} component name. eg: 'D2FooBar'
   */
  function makeNameByUrl (url) {
    const name = (new URL(url)).pathname
      .replace(/^\/src\/components\//, '')
      .replace(/(\/index)?\.(vue|js|jsx)$/, '');
    return makeName(name)
  }

  /**
   * Format component main class name
   * @param {string} name simple component name has no prefix
   *                      eg 'Foo Bar' 'fooBar' '__FOO_BAR__' 'foo/bar'
   * @returns {string} component name. eg: 'd2-foo-bar'
   */
  function makeClassName (name) {
    return `d2-${lodash.kebabCase(name)}`
  }

  /**
   * Format component main class name by component file url
   * @param {string} url component file url
   * @returns {string} component name. eg: 'd2-foo-bar'
   */
  function makeClassNameByUrl (url) {
    return lodash.kebabCase(makeNameByUrl(url)).replace(/-(\d)/g, '$1')
  }

  /**
   * Always return array
   * @param {*} value source value
   * @returns array
   */
  function safeArray (value) {
    return lodash.isArray(value) ? value : []
  }

  /**
   * Check whether the value passed in is a non empty array
   * @param {*} value source value
   * @returns boolean
   */
  function notEmptyArray (value) {
    return lodash.isArray(value) && value.length > 0
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
  function flattenObjectArray (
    source = [],
    childrenKey = 'children',
    iterator = (item, _) => lodash.omit(item, [childrenKey])
  ) {
    const result = [];
    safeArray(source).forEach((item, index) => {
      result.push(iterator(item, index));
      const children = lodash.get(item, childrenKey);
      if (notEmptyArray(children)) {
        result.push(...flattenObjectArray(children, childrenKey, iterator));
      }
    });
    return result
  }

  /**
   * Check if it can be converted to number
   * It is generally used for the verification of component props
   * Please set the data type on the component like 'type: [String, Number]'
   * @param {*} value value to check
   * @returns boolean
   */
  function isNumberLike (value) {
    return !lodash.isNaN(Number(value))
  }

  /**
   * Check whether a value is an integer and less than the given value
   * @param {*} value value to check
   * @param {number} max max value
   * @returns boolean
   */
  function isIntegerAndLessThan (value, max) {
    return lodash.isNumber(value) && Number.isInteger(value) && value < max
  }

  /**
   * Check whether a value is an integer and greater than the given value
   * @param {*} value value to check
   * @param {number} min min value
   * @returns boolean
   */
  function isIntegerAndGreaterThan (value, min) {
    return lodash.isNumber(value) && Number.isInteger(value) && value > min
  }

  /**
   * Check that the value is an integer and within the given range
   * @param {*} value value to check
   * @param {number} min min value
   * @param {number} max max value
   * @returns boolean
   */
  function isIntegerAndBetween (value, min, max) {
    return lodash.isNumber(value) && Number.isInteger(value) && value >= min && value <= max
  }

  exports.clearElement = clearElement;
  exports.convertCssUnit = convertCssUnit;
  exports.flattenObjectArray = flattenObjectArray;
  exports.getStyle = getStyle;
  exports.id = id;
  exports.isElement = isElement;
  exports.isEmptyString = isEmptyString;
  exports.isIntegerAndBetween = isIntegerAndBetween;
  exports.isIntegerAndGreaterThan = isIntegerAndGreaterThan;
  exports.isIntegerAndLessThan = isIntegerAndLessThan;
  exports.isNumberLike = isNumberLike;
  exports.isTwoCNChar = isTwoCNChar;
  exports.isValuableString = isValuableString;
  exports.makeClassName = makeClassName;
  exports.makeClassNameByUrl = makeClassNameByUrl;
  exports.makeName = makeName;
  exports.makeNameByUrl = makeNameByUrl;
  exports.makeRandomName = makeRandomName;
  exports.notEmptyArray = notEmptyArray;
  exports.pascalCase = pascalCase;
  exports.px = px;
  exports.safeArray = safeArray;
  exports.throwError = throwError;
  exports.titleCase = titleCase;
  exports.warn = warn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
