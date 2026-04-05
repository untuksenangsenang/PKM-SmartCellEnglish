"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-16 h-10 rounded-full bg-secondary"></div>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 min-w-[70px] h-10 rounded-full flex items-center justify-center gap-2 bg-secondary text-primary hover:bg-primary/20 transition-colors shadow-sm font-medium text-xs"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
