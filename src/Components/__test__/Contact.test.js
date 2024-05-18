import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us ccomponent", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");
     //asseration
    expect(heading).toBeInTheDocument();
})