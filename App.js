import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement("h1", {id:"heading"}, "React")

const root = ReactDOM.createRoot(document.getElementById("root"))

const jsxHeading = <h1>Jsx Heading</h1> 

const FunctionalComponent = () =>  <h1>FunctionalComponent</h1>

root.render(<FunctionalComponent/>)