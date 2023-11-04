import { Outlet, createBrowserRouter } from "react-router-dom";
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
  {
    path: "/",
    element: (
      <div>
        Dashboard <Outlet></Outlet>{" "}
      </div>
    ),
    children: [
      {
        path: "/user-info",
        element: <h2> Hello User</h2>,
      },
    ],
  },
]);

export default router;
