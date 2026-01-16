import { use } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { ThemeContext } from "../context/theme/context";
import BgArt from "../components/BgArt";

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
      <div className="relative overflow-hidden">
        <BgArt />
        <div className=" min-h-screen">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
