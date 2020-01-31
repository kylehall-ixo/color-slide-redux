import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders color slide', () => {
    const mockStore = configureMockStore()({
      color: {
        currentColor: '',
      },
    })

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
    const colorSlide = getByTestId('color-slide')
    expect(colorSlide).toBeInTheDocument()
  })

  test('renders color display', () => {
    const mockStore = configureMockStore()({
      color: {
        currentColor: '',
      },
    })

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
    const colorDisplay = getByTestId('color-display')
    expect(colorDisplay).toBeInTheDocument()
  })
})
