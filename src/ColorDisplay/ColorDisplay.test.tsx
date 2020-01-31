import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import configureStore from 'redux-mock-store'

import ColorDisplay from './ColorDisplay'
import { Provider } from 'react-redux'

describe('Color Display', () => {
  test('should have a black background by default', () => {
    const mockStore = configureStore()({
      color: {
        currentColor: '',
      },
    })

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <ColorDisplay />
      </Provider>
    )

    const backgroundColor = getByTestId('color-swatch').style.backgroundColor

    expect(backgroundColor).toEqual('black')
  })

  test('should use color from state if available', () => {
    const mockStore = configureStore()({
      color: {
        currentColor: 'red',
      },
    })

    const colorDisplay = render(
      <Provider store={mockStore}>
        <ColorDisplay />
      </Provider>
    )

    const backgroundColor = colorDisplay.getByTestId('color-swatch').style.backgroundColor

    expect(backgroundColor).toEqual('red')
  })
})
