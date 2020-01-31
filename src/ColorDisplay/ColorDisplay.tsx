import React from 'react'
import { connect } from 'react-redux'

import ColorSwatch from '../components/ColorSwatch'
import { colorSelector } from '../selectors/colorSelector'
import { ColorSlideState } from '../reducers/state'

interface ColorDisplayProps {
  color: string
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => (
  <div data-testid='color-display'>
    <ColorSwatch color={color || 'black'} />
  </div>
)

const mapStateToProps = (state: ColorSlideState) => ({
  color: colorSelector(state),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ColorDisplay)
