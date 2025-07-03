"use client";
import { useEffect } from "react";

export default function ThemeClientSync() {
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (localTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return null;
} 