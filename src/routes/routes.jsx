import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard";
import Landing from "../dashboard/pages/Landing";
import Users from "../dashboard/pages/Users";

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
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "users/active",
        Component: Users,
      },
    ],
  },
]);

export default routes;
