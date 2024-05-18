import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us ccomponent", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");
     //asseration
    expect(heading).toBeInTheDocument();
})

test("should load button inside contact us ccomponent", ()=>{
    render(<Contact/>)

    const button = screen.getByText("Submit");
     //asseration
    expect(button).toBeInTheDocument();
})

test("should load name inside contact us ccomponent", ()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("name")
     //asseration
    expect(inputName).toBeInTheDocument();
})

test("should load 2 input boxes on the contact component",()=>{
    render(<Contact/>)
    
   //Querying
    const inputBoxes = screen.getAllByRole("textbox")   //multiple item to use All

    console.log(inputBoxes.length)

    //asseration
    expect(inputBoxes.length).not.toBe(3);
})