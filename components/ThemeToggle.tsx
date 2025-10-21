"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only try to use theme after component is mounted
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

  return <ThemeToggleInner />;
}

function ThemeToggleInner() {
  const { theme, toggleTheme } = useTheme();

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
