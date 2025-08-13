"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { theme } = useTheme();

  // texts 배열을 컴포넌트 외부나 useMemo로 메모화
  const texts = useMemo(
    () => [
      "Web Designer",
      "UI/UX Designer",
      "Frontend Developer",
      "Creative Thinker",
    ],
    []
  );

  // 타이핑 효과
  useEffect(() => {
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, texts]);

  // 테마별 스타일
  const getBgGradient = () => {
    if (theme === "dark") {
      return "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900";
    }
    return "bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700";
  };

  const getPatternColor = () => {
    return theme === "dark" ? "bg-blue-400" : "bg-white";
  };

  const getTextColor = () => {
    return theme === "dark" ? "text-gray-100" : "text-white";
  };

  const getSubTextColor = () => {
    return theme === "dark" ? "text-gray-300" : "text-white/80";
  };

  const getGradientText = () => {
    if (theme === "dark") {
      return "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent";
    }
    return "bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent";
  };

  const getHighlightColor = () => {
    return theme === "dark" ? "text-blue-400" : "text-yellow-300";
  };

  const getButtonStyles = (isPrimary = true) => {
    if (isPrimary) {
      if (theme === "dark") {
        return "bg-blue-600 text-white hover:bg-blue-700";
      }
      return "bg-white text-purple-600 hover:bg-gray-100";
    } else {
      if (theme === "dark") {
        return "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900";
      }
      return "border-2 border-white text-white hover:bg-white hover:text-purple-600";
    }
  };

  const getSocialButtonStyles = () => {
    if (theme === "dark") {
      return "bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/70";
    }
    return "bg-white/10 hover:bg-white/20";
  };

  const getArrowColor = () => {
    return theme === "dark" ? "text-gray-400" : "text-white/70";
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${getBgGradient()} transition-all duration-500`}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-20 left-20 w-32 h-32 ${getPatternColor()} rounded-full blur-xl`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-48 h-48 ${getPatternColor()} rounded-full blur-xl`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/3 w-24 h-24 ${getPatternColor()} rounded-full blur-lg`}
        ></div>
      </div>

      {/* 추가 다크모드 전용 패턴 */}
      {theme === "dark" && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-blue-500 rounded-full blur-2xl"></div>
        </div>
      )}

      <div
        className={`text-center ${getTextColor()} z-10 px-6 max-w-4xl mx-auto`}
      >
        {/* 인사말 */}
        <div className="mb-8">
          <p
            className={`text-lg md:text-xl ${getSubTextColor()} mb-2 transition-colors duration-300`}
          >
            안녕하세요, 저는
          </p>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${getGradientText()} transition-all duration-300`}
          >
            doomock
          </h1>
        </div>

        {/* 타이핑 효과 */}
        <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold transition-colors duration-300">
            <span className={getHighlightColor()}>I am a </span>
            <span
              className={`${getTextColor()} border-r-2 ${
                theme === "dark" ? "border-blue-400" : "border-white"
              } animate-pulse`}
            >
              {currentText}
            </span>
          </h2>
        </div>

        {/* 설명 */}
        <p
          className={`text-lg md:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-white/90"
          } mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300`}
        >
          사용자 경험을 중심으로 한 창의적이고 실용적인 디자인을 만듭니다.
          <br className="hidden md:block" />
          아름답고 기능적인 웹 경험을 선사하는 것이 저의 목표입니다.
        </p>

        {/* 버튼들 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            className={`${getButtonStyles(
              true
            )} px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
          >
            프로젝트 보기
          </button>
          <button
            className={`${getButtonStyles(
              false
            )} px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105`}
          >
            연락하기
          </button>
        </div>

        {/* 소셜 링크 */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="#"
            className={`p-3 ${getSocialButtonStyles()} rounded-full transition-all duration-300 hover:scale-110 border ${
              theme === "dark" ? "border-gray-700" : "border-white/20"
            }`}
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className={`p-3 ${getSocialButtonStyles()} rounded-full transition-all duration-300 hover:scale-110 border ${
              theme === "dark" ? "border-gray-700" : "border-white/20"
            }`}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className={`p-3 ${getSocialButtonStyles()} rounded-full transition-all duration-300 hover:scale-110 border ${
              theme === "dark" ? "border-gray-700" : "border-white/20"
            }`}
          >
            <Mail size={24} />
          </a>
        </div>

        {/* 스크롤 안내 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown
            size={32}
            className={`${getArrowColor()} transition-colors duration-300`}
          />
        </div>
      </div>

      {/* 다크모드 전용 추가 효과 */}
      {theme === "dark" && (
        <div className="absolute inset-0 pointer-events-none">
          {/* 별빛 효과 */}
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div
            className="absolute top-40 left-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-50 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-60 right-1/4 w-1 h-1 bg-blue-200 rounded-full opacity-40 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      )}
    </section>
  );
}
