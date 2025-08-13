"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full transition-all duration-300 hover:scale-110
        ${
          theme === "dark"
            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }
      `}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* 태양 아이콘 */}
        <Sun
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-300 transform
            ${
              theme === "dark"
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }
          `}
        />

        {/* 달 아이콘 */}
        <Moon
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-300 transform
            ${
              theme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }
          `}
        />
      </div>
    </button>
  );
}
