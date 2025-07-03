"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun, BsArrowUp } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* Theme toggle at top right */}
      <button
        className="fixed top-5 right-5 w-[3rem] h-[3rem] bg-background border border-border rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all z-50 text-foreground"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
      {/* Scroll to top at bottom right */}
      <button
        className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-background border border-border rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all z-50 text-foreground"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <BsArrowUp />
      </button>
    </>
  );
};

export default ThemeSwitch;
