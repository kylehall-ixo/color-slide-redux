import React from 'react'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'

import ColorSwatch from './ColorSwatch'
import { changeCurrentColor } from '../reducers/color/colorActions'

describe('ColorSwatch', () => {
  test('should change current color to its color when clicked', () => {
    const mockStore = configureMockStore()({
      color: {
        currentColor: 'black',
      },
    })

    const colorSwatch = render(
      <Provider store={mockStore}>
        <ColorSwatch color='red' />
      </Provider>
    )

    fireEvent.click(screen.getByTestId('color-swatch'))

    expect(mockStore.getActions()).toHaveLength(1)
    expect(mockStore.getActions()).toContainEqual(changeCurrentColor('red'))
  })
})
