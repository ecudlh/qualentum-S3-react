import App from "./App";
import CardList from "./components/CardList/CardList";
import Login from "./components/Login/Login";
import CartProducts from "./components/CartProducts/CartProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <CardList /> },
            { path: "/product/:id", element: (
                <ProtectedRoute>
                    <ProductDetail />
                </ProtectedRoute> 
            )},
            { path: "/login", element: <Login /> },
            { path: "/cart", element: (
                <ProtectedRoute>
                    <CartProducts />
                </ProtectedRoute>
            )},
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);