const messageLength = 117

const codeInject = [
  '',
  '@d2-framework/vite-plugin-surely',
  'You have hidden the Surely Vue watermark',
  'The purpose of plugin is to facilitate debugging in the development stage',
  'Only allowed in development mode, the user shall bear all consequences arising therefrom',
  'Please purchase an official business license: https://www.surely.cool',
  'If you have already purchased, please delete SurelyTableHack in vite.config.js',
  ''
]
  .map(t => `console.error('${messageText(t)}');`)
  .join('')

/**
 * @description Replace watermark to empty string
 * @param {string} code source code
 * @returns {string} code
 */
function removeTableWatermark (code) {
  const watermarks = [
    'Powered by Surely Vue',
    'Invalid License',
    'Unlicensed Product',
    'License Expired'
  ]
  const watermarksRegExp = new RegExp(`"(${watermarks.join('|')})"`, 'g')
  return code.replace(watermarksRegExp, '""')
}

/**
 * @description Alignment and same length, just to look good
 * @param {string} code source code
 * @returns {string} code
 */
function beautifyTableError (code) {
  return code
    .replace(/\*{113}/g, messageText())
    .replace(
      '***************************************** Surely Vue Enterprise License ********************************************',
      messageText('Surely Vue Enterprise License')
    )
    .replace(
      '********************************************* Invalid License ***************************************************',
      messageText('Invalid License')
    )
}

/**
 * @description Generate fixed width message
 * @param {string} text content
 * @returns {string} fixed width message
 */
function messageText (text = '') {
  text = text ? ` ${text} ` : ''
  const length = Math.floor((messageLength - text.length) / 2)
  const line = '*'.repeat(length)
  return `${line}${text}${line}`.padEnd(messageLength, '*')
}

export function SurelyTableHack () {
  return {
    name: 'surely-table-hack',
    transform (code, id) {
      if (id.includes('surely-vue')) {
        code = removeTableWatermark(code)
        code = beautifyTableError(code)
        return code + codeInject
      }
    }
  }
}
