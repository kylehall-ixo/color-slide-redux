import { ColorAction } from './colorActions'

const initialState = {
  currentColor: '',
}

export const colorReducer = (state = initialState, action: ColorAction) => {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return {
        ...state,
        currentColor: action.newColor,
      }
    default:
      return state
  }
}
