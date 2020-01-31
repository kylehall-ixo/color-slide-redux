import { colorReducer } from './colorReducer'

describe('colorReducer', () => {
  test('should default to no current color', () => {
    const state = colorReducer(undefined, { type: '', newColor: '' })

    expect(state.currentColor).toBeFalsy()
  })
})
