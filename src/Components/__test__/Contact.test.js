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

    const button = screen.getByText("Random");
     //asseration
    expect(button).toBeInTheDocument();
})