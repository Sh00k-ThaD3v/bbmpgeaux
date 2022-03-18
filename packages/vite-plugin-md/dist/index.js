'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MarkdownIt = require('markdown-it');
var hljs = require('highlight.js');
var classnames = require('classnames');
var vitePluginMd = require('vite-plugin-md');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MarkdownIt__default = /*#__PURE__*/_interopDefaultLegacy(MarkdownIt);
var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var vitePluginMd__default = /*#__PURE__*/_interopDefaultLegacy(vitePluginMd);

// Markdown parser done right. Fast and easy to extend

const md = new MarkdownIt__default["default"]();
const pre = html => `<pre class="p-0">${html}</pre>`;
const code = (html, lang) => {
  const classNames = classnames__default["default"]('hljs', {
    [`language-${lang} `]: lang
  });
  return `<code class="${classNames}">${html}</code>`
};

function markdownHighlight (content, lang) {
  if (lang && hljs__default["default"].getLanguage(lang)) {
    try {
      const html = hljs__default["default"].highlight(content, {
        language: lang,
        ignoreIllegals: true
      }).value;
      return pre(code(html, lang))
    } catch (__) {}
  }
  return pre(code(md.utils.escapeHtml(content)))
}

const markdownItOptions = {
  highlight: markdownHighlight
};

const markdownOptions = {
  markdownItOptions
};

function Markdown (options = {}) {
  return vitePluginMd__default["default"](lodash.merge({}, markdownOptions, options))
}

exports.Markdown = Markdown;
exports.markdownHighlight = markdownHighlight;
exports.markdownItOptions = markdownItOptions;
exports.markdownOptions = markdownOptions;
