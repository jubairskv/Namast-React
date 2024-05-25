import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us ccomponent", () => { //single test case
    render(<Contact />)

    const heading = screen.getByRole("heading");
    //console.log(heading)
    //asseration
    expect(heading).toBeInTheDocument();
})

describe("for mulyiple testcase componet", () => {    //grouping testcases


    it("should load contact us ccomponent", () => { //single test case
        render(<Contact />)

        const button = screen.getByRole("button");
        //console.log(heading)
        //asseration
        expect(button).toBeInTheDocument();               //getbyrole refers to button,heading tag like that
    })



    test("should load 2 input boxes contact us ccomponent", () => { //single test case
        render(<Contact />)


        //query
        const inputBoxes = screen.getAllByRole("textbox")    //getAllByROle all element like textbox
        //console.log(inputBoxes[0])    returns JSX element
        //console.log(inputBoxes.length)  array of textboxes

        //asseration
        expect(inputBoxes.length).toBe(2)
        //expect(inputBoxes.length).not.toBe(3)
    })

    describe("nesdted grpingtestcases", () => {
        it("should load contact us ccomponent", () => { //single test case
            render(<Contact />)

            const button = screen.getByText("Submit");    //getbytext refers to name like submit like that
            //console.log(heading)
            //asseration
            expect(button).toBeInTheDocument();
        })

        it("should load contact us ccomponent", () => { //single test case
            render(<Contact />)

            const placeholderName = screen.getByPlaceholderText("name")    //getbytext refers to name like submit like that
            //console.log(heading)
            //asseration
            expect(placeholderName).toBeInTheDocument();
        })

    })

})


it("should load contact us ccomponent", () => { //single test case
    render(<Contact />)

    const heading = screen.getByRole("heading");
    //console.log(heading)
    //asseration
    expect(heading).toBeInTheDocument();
    //expect(heading).toBeTruthy();

})


//it recommended
