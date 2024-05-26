import { fireEvent, render } from "@testing-library/react"
import { act } from "@testing-library/react"
import ResturantMenu from "../RestaurantMenu"
import Mock_datas from "../mocks/mockResMenu.json"
import { render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(Mock_datas)
    })
}

)

it("should load resturant menu component" ,async ()=>{
 await act (async ()=>{
    render(
        <Provider store={store}>
        <ResturantMenu/>
        </Provider>
    )

    const accordianHeader = screen.getByText("Dosa(8)")
    fireEvent.click(accordianHeader)

    const foodItems = screen.getAllByTestId("food-Items")

    expect(foodItems.length).toBe(8)
 })
})