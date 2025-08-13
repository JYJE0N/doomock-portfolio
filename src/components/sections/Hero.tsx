"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Web Designer",
    "UI/UX Designer",
    "Frontend Developer",
    "Creative Thinker",
  ];

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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="text-center text-white z-10 px-6 max-w-4xl mx-auto">
        {/* 인사말 */}
        <div className="mb-8">
          <p className="text-lg md:text-xl text-white/80 mb-2">
            안녕하세요, 저는
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            doomock
          </h1>
        </div>

        {/* 타이핑 효과 */}
        <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-yellow-300">I am a </span>
            <span className="text-white border-r-2 border-white animate-pulse">
              {currentText}
            </span>
          </h2>
        </div>

        {/* 설명 */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          사용자 경험을 중심으로 한 창의적이고 실용적인 디자인을 만듭니다.
          <br className="hidden md:block" />
          아름답고 기능적인 웹 경험을 선사하는 것이 저의 목표입니다.
        </p>

        {/* 버튼들 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            프로젝트 보기
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
            연락하기
          </button>
        </div>

        {/* 소셜 링크 */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* 스크롤 안내 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown
            size={32}
            className="text-white/70"
          />
        </div>
      </div>
    </section>
  );
}
