import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../components/login";
import Register from "../components/register";

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
    ],
  },
]);

export default router;
