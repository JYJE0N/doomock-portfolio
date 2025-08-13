"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // 다크모드에 따른 스타일 계산
  const getHeaderStyles = () => {
    if (isScrolled) {
      return theme === "dark"
        ? "bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-800"
        : "bg-white/90 backdrop-blur-md shadow-sm";
    }
    return "bg-transparent";
  };

  const getTextStyles = (isLogo = false) => {
    if (isScrolled) {
      return theme === "dark" ? "text-white" : "text-gray-900";
    }
    return "text-white";
  };

  const getMenuTextStyles = () => {
    if (isScrolled) {
      return theme === "dark"
        ? "text-gray-300 hover:text-white"
        : "text-gray-700 hover:text-blue-500";
    }
    return "text-white/90 hover:text-blue-300";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyles()}`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold transition-colors ${getTextStyles(
                true
              )}`}
            >
              doomock
            </h1>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${getMenuTextStyles()}`}
              >
                {item.name}
              </a>
            ))}

            {/* 테마 토글 버튼 */}
            <ThemeToggle />

            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Resume
            </button>
          </div>

          {/* 모바일 메뉴 버튼 & 테마 토글 */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${getTextStyles()}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 right-0 border-t shadow-lg ${
              theme === "dark"
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-medium transition-colors ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-blue-500 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
