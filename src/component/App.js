import React, { Component } from "react"
import Block from "./Block"

import "./styles.css"

class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    const displayBlocks = this.props.blocks.map(data => (
      <Block
        {...data}
        handleClick={this.props.handleClick.bind(this, data.id)}
      />
    ))
    return (
      <div className="App">
        <div className="blocks">{displayBlocks}</div>
      </div>
    )
  }
}

export default App
