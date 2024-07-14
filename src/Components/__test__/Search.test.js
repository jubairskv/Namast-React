import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../Components/mocks/RestaurantList.json"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

beforeAll(()=>{
    console.log("before")
})

beforeEach(()=>{
    console.log("before Each")
})

it("should search res list for Pizza", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)

    )

    //  const beforeCard = screen.getAllByTestId("resCards")
    //  expect(beforeCard .length).toBe(10)

    const searchbtn = screen.getByRole("button", { name: "search" })
    expect(searchbtn).toBeInTheDocument()
    //console.log(searchbtn)  

     const searchinput = screen.getByTestId("searchInput")
     fireEvent.change(searchinput, { target: { value: "pizza" } })
     fireEvent.click(searchbtn)
    // expect(searchinput).toBeInTheDocument()
    //expect(searchinput).toBeInTheDocument()

    //  const aftercards = screen.getAllByTestId("resCards")
    //  expect(aftercards.length).toBe(1);  
})

// it("should top Rated restaurant", async () => {
//     await act(async () => render(
//         <BrowserRouter>
//             <Body />
//         </BrowserRouter>)

//     )

//      const beforeCard = screen.getAllByTestId("resCards")
//      expect(beforeCard .length).toBe(10)

//     const topRatedBtn = screen.getByRole("button",{name:"Top rated Restaurant"})
//     fireEvent.click(topRatedBtn)

//     const aftercards = screen.getAllByTestId("resCards")
//     expect(aftercards.length).toBe(10)

// })