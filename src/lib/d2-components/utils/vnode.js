/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { Fragment } from 'vue'

export function isFragment (vnode) {
  return vnode.type === Fragment
}
