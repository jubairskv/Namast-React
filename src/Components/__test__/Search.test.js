import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../Components/mocks/RestaurantList.json"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the body component with serach button", async()=>{
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    
)

const beforeCard = screen.getAllByTestId("resCards")
expect(eforeCard .length).toBe(20)

const searchbtn = screen.getAllByRole("button" ,{name:"search"})
//console.log(searchbtn)  

const searchinput = screen .getByTestId("searchinput")
fireEvent.change(searchinput,{target:{value:"burger"}})
fireEvent.click(searchbtn)

const aftercards = screen.getAllByTestId("resCard")

expect(aftercards.length).toBe(4);  
})