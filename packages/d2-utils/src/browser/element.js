export const isElement = el => {
  return typeof HTMLElement === 'object' ?
    el instanceof HTMLElement :
    el && typeof el === 'object' && typeof el.nodeName === 'string' && el.nodeType === 1
}

export function clearElement (el) {
  if (isElement(el)) {
    el.innerHTML = ''
  }
}
