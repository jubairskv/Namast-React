import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import store from "../../utils/store"


it("it should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const LoginButton = screen.getByRole("button",{name:"Login"});

    expect(LoginButton).toBeInTheDocument();
})