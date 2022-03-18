// Markdown parser done right. Fast and easy to extend
// [website] https://markdown-it.github.io/markdown-it/
import MarkdownIt from 'markdown-it'
// Syntax highlighting for the Web
// [website] https://highlightjs.org/
import hljs from 'highlight.js'
// A simple JavaScript utility for conditionally joining classNames together.
import classnames from 'classnames'
// Use Markdown as Vue components
// Use Vue components in Markdown
// [website] https://github.com/antfu/vite-plugin-md
import vitePluginMd from 'vite-plugin-md'

import { merge } from 'lodash'

const md = new MarkdownIt()
const pre = html => `<pre class="p-0">${html}</pre>`
const code = (html, lang) => {
  const classNames = classnames('hljs', {
    [`language-${lang} `]: lang
  })
  return `<code class="${classNames}">${html}</code>`
}

export function markdownHighlight (content, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      const html = hljs.highlight(content, {
        language: lang,
        ignoreIllegals: true
      }).value
      return pre(code(html, lang))
    } catch (__) {}
  }
  return pre(code(md.utils.escapeHtml(content)))
}

export const markdownItOptions = {
  highlight: markdownHighlight
}

export const markdownOptions = {
  markdownItOptions
}

export function Markdown (options = {}) {
  return vitePluginMd(merge({}, markdownOptions, options))
}
