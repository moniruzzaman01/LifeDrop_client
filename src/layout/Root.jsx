import { use } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { ThemeContext } from "../context/theme/context";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/auth/context";
import HomepageSkeleton from "../components/HomepageSkeleton";

export default function Root() {
  const { toggleTheme } = use(ThemeContext) || {};
  const { globalLoading } = use(AuthContext) || {};

  if (globalLoading) {
    return <HomepageSkeleton />;
  }

  return (
    <div>
      <div
        onClick={toggleTheme}
        className="flex justify-center cursor-pointer absolute bottom-0 right-0"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
          🩸
        </div>
      </div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
}
