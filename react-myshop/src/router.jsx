import App from "./App";
import CardList from "./components/CardList/CardList";
import Login from "./components/Login/Login";
import CartProducts from "./components/CartProducts/CartProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <CardList /> },
            { path: "/product/:id", element: <ProductDetail /> },
            { path: "/login", element: <Login /> },
            { path: "/cart", element: <CartProducts /> },
        ],
    },
]);