import { useCallback, useEffect, useState } from "react";

const KEY = "th";

const systemPrefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function readSaved() {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

/* Light/dark theme that follows the OS until the visitor picks one. */
export function useTheme() {
  const [theme, setTheme] = useState(readSaved);

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const isDark = theme
      ? theme === "dark"
      : systemPrefersDark();

    const next = isDark ? "light" : "dark";

    setTheme(next);

    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage can be blocked; theme still works for this session.
    }
  }, [theme]);

  return { theme, toggle };
}