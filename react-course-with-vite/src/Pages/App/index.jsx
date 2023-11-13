import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NoFound from "../NoFound";
import SignIn from "../SignIn";
import { NavBar } from "../../components/NavBar";
import "./App.css";
import { ShoppingCartProvider } from "../../Context/index";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NoFound /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
