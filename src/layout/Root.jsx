import { useEffect } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export default function Root() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  };
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
