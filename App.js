import React from "react";
import ReactDOM from "react-dom"
// const heading1=React.createElement("h1",{id:"title"},"Heading1")
// const heading2=React.createElement("h2",{id:"title"},"Heading2")
// const container=React.createElement("div",{id:"container"},[heading1,heading2])
// const root=ReactDOM.createRoot(document.getElementById("root"))
// passing the react element inside the root
// root.render(container);
// console.log(container)
/**
 * <div id="parent"> * <div id=child>
 * <h1></h1>
 * 
 * <h2></h2>
 * </div>
 * </div>
 * reactElement(object)=>HTML(browser understand)
 *
 */
// const parent = React.createElement(
//   react element
//   "div",
//   { id: "parent" },
// [ React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hi there this jubair react"), //if u want to pass nested component u have pass like as array
//     React.createElement("h2", {}, "hi there"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hi there"), //if u want to pass nested component u have pass like as array
//     React.createElement("h2", {}, "hi there"),
//   ])]
// );
const jsx=<h1 id="heading">hi there</h1>
const heading = React.createElement("h1", { id: "heading" }, "hi everyone");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx);            //everything will render inside the root id
console.log(parent);
