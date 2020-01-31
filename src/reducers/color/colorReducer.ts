import { ColorAction, ColorActionTypes } from './colorActions'

const initialState = {
  currentColor: '',
}

export const colorReducer = (state = initialState, action: ColorAction) => {
  switch (action.type) {
    case ColorActionTypes.COLOR_CHANGE:
      return {
        ...state,
        currentColor: action.newColor,
      }
    default:
      return state
  }
}
