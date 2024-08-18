import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"; //1st to import this router
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./Components/Grocery";
import Cart from "./Components/Cart";
import ScrollMenu from "./Components/ScrollMenu";

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "jubair Kasim",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ LoggedInUser: userName, setUserName }}>
        {" "}
        {/* jubair Kasim at app level */}
        <div className="App">
          {/* <UserContext.Provider value={{LoggedInUser:"jubair SKV"}}>  jubair skv at heeader level */}
          <Header />
          {/*  </UserContext.Provider>*/}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//react router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ), //children route
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/scroll/:resId",
        element: <ScrollMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //     path:"/About",
  //     element:<About/>,
  //     errorElement:<Error/>
  // },
  // {
  //     path:"/Contact",
  //     element:<Contact/>,
  //     errorElement:<Error/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //react router component need to add here
