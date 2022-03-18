/**
 * Converts value to a number and add px unit
 * @param {string|number} value original value
 * @param {string} unit css unit name
 * @returns {string} css value with unit
 * @example px(14) => '14px'
 * @example px('14') => '14px'
 * @example px('1em') => '1px'
 */
export function px (value) {
  return value ? `${parseFloat(value)}px` : ''
}

/**
 * Get element style
 * @param {HTMLElement} element target element
 * @param {string} name css prop name
 * @returns {*}
 */
export function getStyle (element, name) {
  const style = window.getComputedStyle ? getComputedStyle(element, null) : element.currentStyle
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
export function convertCssUnit (cssValue, target) {
  target = target || document.body
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
  }
  // Match positive and negative numbers including decimals with preceeding unit
  const pattern = new RegExp(`^([\-\+]?(?:\\d+(?:\\.\\d+)?))(${ Object.keys(units).join('|') })$`, 'i')
  // If is a match, return example: [ '-2.75rem', '-2.75', 'rem' ]
  const matches = String.prototype.toString.apply(cssValue).trim().match(pattern)
  if (matches) {
    const value = Number(matches[1])
    const unit = matches[2].toLocaleLowerCase()
    // Sanity check, make sure unit conversion function exists
    if (unit in units) {
      return units[unit](value)
    }
  }
  return cssValue
}
