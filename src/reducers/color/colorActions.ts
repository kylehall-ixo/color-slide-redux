interface ColorChangeAction extends BasicAction {
  newColor: string
}

interface BasicAction {
  type: string
}

export const changeCurrentColor = (newColor: string): ColorChangeAction => ({
  type: 'COLOR_CHANGE',
  newColor,
})

export type ColorAction = ColorChangeAction
