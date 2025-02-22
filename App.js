const heading =React.createElement("h1", {id: "parent"}, [React.createElement("h1", {id: "heading"},[React.createElement("h1", {id: "heading2"}, "Hello World from React"),React.createElement("h1", {id: "heading2sib"}, "Hello World from React2")],
),React.createElement("h1", {id: "heading2"},[React.createElement("h1", {id: "heading2"}, "Hello World from React"),React.createElement("h1", {id: "heading2sib"}, "Hello World from React2")],
),])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)