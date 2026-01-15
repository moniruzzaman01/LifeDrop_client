import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      //   { path: "about", Component: About }
    ],
  },
]);

export default routes;
