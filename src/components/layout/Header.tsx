"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
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
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Resume
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-500 font-medium"
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
