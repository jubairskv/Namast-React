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

//Reactelement => object => HTML element

//jsx[transpile before it reaches the JS engine] - parcel - babel
const jsx = <h1 className="heading">React element using JSX</h1> //this code transpile with babel as js code so browser xan understand [not only this code all piece of code]

//react element
const multiline_jsx = (
    <h1>
        this is multiline JSX
    </h1>
)
//react component
const ReactComponent = () => {
    return <h1>hi fuction component</h1>  //common syntax
}
//react element
const heading = React.createElement("h1", { id: "heading" }, "hi everyone");
//react component
//class base component -OLD
//functional component -NEW
const functionComponent = () => {
    return <h1>hi fuction component</h1>  //common syntax
}

const functionsComponent = () => {
    (
        <h1>
            hi fuction component
        </h1>
    )
}

const functionssComponent = () => (
    <div>
        <h1>
            hi fuction component
        </h1>
    </div>
)

const funComponent = () => <h1>hi fuction component</h1>  //both same component

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(multiline_jsx);  //rendering react elelemnt
root.render(<ReactComponent/>);   //rendering React component         //everything will render inside the root id
console.log(parent);


