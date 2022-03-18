class FrameworkError extends Error {
  constructor(message) {
    super(message)
    this.name = 'Error From D2Framework'
  }
}

export function throwError (scope, message) {
  throw new FrameworkError(`[${scope}] ${message}`)
}

export function warn(scope, message) {
  console.warn(new FrameworkError(`[${scope}] ${message}`))
}
