import path from 'path'

// Set import.meta.url as the file path at build timed
// https://www.rollupjs.com/guide/plugin-development
// https://github.com/vitejs/vite/issues/4646

export function MetaUrl () {
  return {
    name: 'MetaUrl',
    resolveImportMeta: (property, { moduleId }) => {
      if (property === 'url') {
        return `new URL('${path.relative(process.cwd(), moduleId)}', document.baseURI).href`;
      }
    }
  }
}
