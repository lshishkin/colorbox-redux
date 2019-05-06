import { combineReducers } from "redux"

import click from "./click-reducer"

const reducer = combineReducers({
  click: click
})

export default reducer
