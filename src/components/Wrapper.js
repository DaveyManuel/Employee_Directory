import React from "react";

function Wrapper(props) {
  return <div className="wrapper bg-dark">{props.children}</div>;
}

export default Wrapper;
