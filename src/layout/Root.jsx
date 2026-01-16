import { use } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { ThemeContext } from "../context/theme/context";

export default function Root() {
  const { toggleTheme } = use(ThemeContext) || {};

  return (
    <div>
      <div
        onClick={toggleTheme}
        className="flex justify-center cursor-pointer absolute top-0 right-0"
      >
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
          🩸
        </div>
      </div>
      <Outlet />
      <Toaster />
    </div>
  );
}
