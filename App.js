// const heading1=React.createElement("h1",{id:"title"},"Heading1")
// const heading2=React.createElement("h2",{id:"title"},"Heading2")
// const container=React.createElement("div",{id:"container"},[heading1,heading2])
// const root=ReactDOM.createRoot(document.getElementById("root"))
// //passing the react element inside the root
// root.render(container);
// console.log(container)
const heading=React.createElement("h1",{},"hi everyone");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);