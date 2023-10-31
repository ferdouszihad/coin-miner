import { createBrowserRouter } from "react-router-dom";
import MainArch from "../layouts/MainArch";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Secret from "../pages/Secret";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainArch></MainArch>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: <Secret></Secret>,
      },
    ],
  },
]);

export default router;
