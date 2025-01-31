import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../components/login";
import Register from "../components/register";
import CartPage from "../pages/books/cartPage";
import CheckoutPage from "../pages/books/checkoutPage";
import BookDetail from "../pages/books/bookDetail";

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
        element: <CheckoutPage />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
