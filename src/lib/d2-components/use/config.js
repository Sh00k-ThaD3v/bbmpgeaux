import { inject } from 'vue'
import { name as configProviderName } from '../packages/config/src/config.jsx'

export function useConfig () {
  const config = inject(configProviderName, {})
  return config
}
