import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import ColorSlide from './ColorSlide'

describe('ColorSlide', () => {
  test('shows 6 color swatches', () => {
    const mockStore = configureMockStore()({})

    const { getAllByTestId } = render(
      <Provider store={mockStore}>
        <ColorSlide />
      </Provider>
    )

    const colorSwatches = getAllByTestId('color-swatch')

    expect(colorSwatches).toHaveLength(6)
  })
})
