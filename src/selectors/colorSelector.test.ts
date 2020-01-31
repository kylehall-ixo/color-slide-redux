import { colorReducer } from '../reducers/color/colorReducer'

import { colorSelector } from './colorSelector'

describe('color selector', () => {
  test('gets current color out of state', () => {
    const expectedColor = 'red'
    const state = { color: { currentColor: expectedColor } }

    const actual = colorSelector(state)

    expect(actual).toEqual(expectedColor)
  })
})
