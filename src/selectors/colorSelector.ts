import { ColorSlideState } from "../reducers/state"

export const colorSelector = ({ color }: ColorSlideState) => color.currentColor
