import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../utils/store"
import Header from "../Header"
import "@testing-library/jest-dom"


it("it should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

   //const loginButton = screen.getByRole("button");
   const loginButton = screen.getByRole("button",{name:"Login"});   //finding specific button name for if any more btn is there

    //const loginButton = screen.getByText("Login")
    //console.log(loginButton)

    expect(loginButton).toBeInTheDocument();

})


it("it should render header component with a cart item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

   
   const cartItem = screen.getByText("Cart(0items)");  

    expect(cartItem).toBeInTheDocument();

})

it("it should render header component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

   
   const cartItem = screen.getByText(/Cart/);  //regext it match Cart name
   
    expect(cartItem).toBeInTheDocument();

})

//Login Button test cases

it("should change login button to logout button on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

   //const loginButton = screen.getByRole("button");
   const loginButton = screen.getByRole("button",{name:"Login"});   //finding specific button name for if any more btn is there

   fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"Logout"})
    //console.log(loginButton)

    expect(logoutButton).toBeInTheDocument();
})




