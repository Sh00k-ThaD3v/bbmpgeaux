'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

// Set import.meta.url as the file path at build timed
// https://www.rollupjs.com/guide/plugin-development
// https://github.com/vitejs/vite/issues/4646

function MetaUrl () {
  return {
    name: 'MetaUrl',
    resolveImportMeta: (property, { moduleId }) => {
      if (property === 'url') {
        return `new URL('${path__default["default"].relative(process.cwd(), moduleId)}', document.baseURI).href`;
      }
    }
  }
}

exports.MetaUrl = MetaUrl;
