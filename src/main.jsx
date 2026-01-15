import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import routes from "./routes/routes.jsx";
import AuthProvider from "./contextApis/auth/Provider.jsx";
import ThemeProvider from "./contextApis/theme/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
