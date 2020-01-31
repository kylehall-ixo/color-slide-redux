export const ColorActionTypes = {
  COLOR_CHANGE: 'COLOR_CHANGE',
}

interface ColorChangeAction extends BasicAction {
  newColor: string
}

interface BasicAction {
  type: string
}

export const changeCurrentColor = (newColor: string): ColorChangeAction => ({
  type: ColorActionTypes.COLOR_CHANGE,
  newColor,
})

export type ColorAction = ColorChangeAction
