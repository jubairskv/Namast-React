import { fireEvent, render } from "@testing-library/react"
import { act } from "@testing-library/react"
import Header from "../Header"
import ResturantMenu from "../RestaurantMenu"
import Mock_datas from "../mocks/mockResMenu.json"
import {render,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { BrowserRouter } from "react-router-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(Mock_datas)
    })
}

)

it("should load resturant menu component" ,async ()=>{
 await act (async ()=>{
    render(
        <BrowserRouter>
        <Provider store={store}>
            <Header/>
        <ResturantMenu/>
        </Provider>
        </BrowserRouter>
    )

    const accordianHeader = screen.getByText("Dosa(8)")
    fireEvent.click(accordianHeader)

    const foodItems = screen.getAllByTestId("food-Items")

    expect(foodItems.length).toBe(8)

    const addbBtn = screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addbBtn[0])

    const cart = screen.getByText("cart(1items")
    expect(cart).toBeInTheDocument()
 })
})