import React from 'react'
import { connect, RootStateOrAny } from 'react-redux'

import ColorSwatch from '../components/ColorSwatch'

interface ColorDisplayProps {
  color: string
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => (
  <div data-testid='color-display'>
    <ColorSwatch color={color || 'black'} />
  </div>
)

const mapStateToProps = (state: RootStateOrAny) => ({
  color: state.color.currentColor,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ColorDisplay)
