export function getValueFromSlotsOrProps(slots, props, keyName = 'default') {
  return props[keyName] ?? slots[keyName]?.()
}
