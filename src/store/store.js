import { createStore } from "redux"
import reducer from "../reducers"

const colors = [
  "red",
  "gray",
  "black",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple"
]
const blocks = []
for (let i = 1; i < 17; i++) {
  blocks.push({
    id: i,
    visable: false,
    pass: false,
    color: colors[Math.floor((i - 1) / 2)]
  })
}

let preloadedState = { click: { blocks: blocks.sort(compareRandom) } }

const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { preloadedState }

export default store

function compareRandom(a, b) {
  return Math.random() - 0.5
}
