import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../components/login";
import Register from "../components/register";
import CartPage from "../pages/books/cartPage";
import CheckoutPage from "../pages/books/checkoutPage";
import BookDetail from "../pages/books/bookDetail";
import PrivateRoute from "./privateRoute";
import Order from "../../../backend/src/models/order.model";
import OrderPage from "../pages/books/orderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      {
        path: "/orders",
        element: <OrderPage />,
      },
    ],
  },
]);

export default router;
