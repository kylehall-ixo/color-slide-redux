import React, { Dispatch } from 'react'
import { RootStateOrAny, connect } from 'react-redux'
import { changeCurrentColor, ColorAction } from '../reducers/color/colorActions'

interface ColorSwatchProps {
  color: string;
  changeColor: (color: string) => void
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, changeColor }) => (
  <div 
    data-testid='color-swatch'
    style={{
      ...styles.box,
      backgroundColor: color 
    }}
    onClick={() => changeColor(color)}></div>
)

const mapStateToProps = (state: RootStateOrAny) => ({})

const mapDispatchToProps = (dispatch: Dispatch<ColorAction>) => ({
  changeColor: (newColor: string) => dispatch(changeCurrentColor(newColor)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwatch)

const styles = {
  box: {
    width: 150,
    height: 250,
  }
}
