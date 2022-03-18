import { resolve } from 'path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import chalk from 'chalk'

async function scanFiles ({
  folder = ''
} = {}) {
  const files = glob.sync('**/*.js', {
    cwd: resolve(folder)
  })
  for (const file of files) {
    console.log('prebuild:', 'file', chalk.blue(file))
  }
  return files
}

async function updateFileList ({
  folder = ''
} = {}) {
  const files = await scanFiles({
    folder
  })
  const configFile = 'rollup.config.js'
  let configText = (fs.readFileSync(configFile)).toString()
  const replaceTarget = /(const input = \[)(.{0,})(\])/
  const replaceValue = `$1${files.map(e => `'src/${e}'`).join(', ')}$3`
  configText = configText.replace(replaceTarget, replaceValue)
  fs.writeFileSync(configFile, configText)
  console.log('prebuild:', configFile, chalk.green('update completed'))
}

updateFileList({
  folder: 'src'
})
