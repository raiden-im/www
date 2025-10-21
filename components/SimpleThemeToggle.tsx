"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function SimpleThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = (savedTheme as "light" | "dark") || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10"
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}
