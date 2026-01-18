import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard";
import Landing from "../dashboard/pages/Landing";
import Users from "../dashboard/pages/Users";
import MyDRPage from "../pages/MyDRPage";
import CreateDRPage from "../dashboard/pages/CreateDRPage";
import AllDRPage from "../pages/AllDRsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "my-donation-requests", Component: MyDRPage },
      {
        path: "create-donation-request",
        Component: CreateDRPage,
      },
      {
        path: "all-donation-requests",
        Component: AllDRPage,
      },
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
        path: "users",
        Component: Users,
      },
    ],
  },
  { path: "login", Component: Login },
  { path: "registration", Component: Registration },
]);

export default routes;
