import { useEffect, useState } from "react";
import { ThemeContext } from "./context";

export default function Provider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.theme = theme;
    setTheme(theme);
  };
  return (
    <ThemeContext value={{ toggleTheme, theme }}>{children} </ThemeContext>
  );
}
