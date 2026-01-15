import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "registration", Component: Registration },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [],
  },
]);

export default routes;
