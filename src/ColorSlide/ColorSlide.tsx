import React from 'react'

import ColorSwatch from '../components/ColorSwatch'

const COLORS = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9']

const ColorSlide: React.FC = _ => (
  <div data-testid='color-slide'>
    {COLORS.map(c => (
      <ColorSwatch key={c} color={c} />
    ))}
  </div>
)

export default ColorSlide
