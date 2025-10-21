import type { ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { AllTheProviders } from './test-providers'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export specific utilities from testing library (not components)
export {
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
  renderHook,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
// Export our custom render function
export { customRender as render }
