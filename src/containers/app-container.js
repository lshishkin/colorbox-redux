import { connect } from "react-redux"

import { click } from "../actions/click-actions"

import App from "../components/App"

function mapStateToProps(state) {
  return { blocks: state.click.blocks }
}

function mapDispatchToProps(dispatch) {
  return {
    click: val => {
      dispatch(click(val))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default SearchContainer
