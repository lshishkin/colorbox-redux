import React from "react";

function Block(props) {
  const divStyle =
    props.visable || props.pass
      ? {
          background: props.color
        }
      : {};
  return (
    <div
      className="block"
      key={props.id}
      id={props.id}
      style={divStyle}
      onClick={props.handleClick}
    />
  );
}

export default Block;
