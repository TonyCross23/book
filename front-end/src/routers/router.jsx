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
import AdminLogin from "../components/adminLogin";
import Dashboard from "../pages/dashboard/dashboard";
import AdminRoute from "./adminRoute";

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
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
