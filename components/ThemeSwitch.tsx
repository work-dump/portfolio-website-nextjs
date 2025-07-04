"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun, BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button only when not at the top
  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={`fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-background border border-border rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all z-50 text-foreground ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        } transition-opacity duration-500 ease-in-out`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <BsArrowUp />
      </button>
    </>
  );
};

export default ThemeSwitch;
