"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Heart,
  ArrowUp,
  MessageCircle,
  Calendar,
  ExternalLink,
  Code,
  Palette,
  Coffee,
  Zap,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "UI/UX Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Web Development", icon: <Code className="w-4 h-4" /> },
    { name: "Brand Identity", icon: <Zap className="w-4 h-4" /> },
    { name: "Consulting", icon: <Coffee className="w-4 h-4" /> },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/doomock",
      color: theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/doomock",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:hello@doomock.com",
      color: "hover:text-green-400",
    },
    {
      name: "Kakao",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://open.kakao.com/o/doomock",
      color: "hover:text-yellow-400",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@doomock.com",
      link: "mailto:hello@doomock.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+82 10-1234-5678",
      link: "tel:+821012345678",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Suwon, South Korea",
      link: "https://maps.google.com/?q=수원시",
    },
  ];

  // 테마별 스타일
  const footerBg = theme === "dark" ? "bg-gray-900" : "bg-gray-800";
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-100";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-200";
  const textMuted = theme === "dark" ? "text-gray-400" : "text-gray-400";
  const socialBg =
    theme === "dark"
      ? "bg-gray-800 hover:bg-gray-700"
      : "bg-gray-700 hover:bg-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-600";
  const techStackBg = theme === "dark" ? "bg-gray-800/50" : "bg-gray-700/50";

  return (
    <footer
      className={`${footerBg} text-white relative overflow-hidden transition-colors duration-300`}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* 메인 푸터 콘텐츠 */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* 브랜드 섹션 */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  doomock
                </h3>
                <p className={`${textMuted} mt-3 leading-relaxed`}>
                  창의적인 디자인과 기술의 완벽한 조화를 통해 사용자 중심의 웹
                  경험을 만들어갑니다.
                </p>
              </div>

              {/* 소셜 링크 */}
              <div>
                <h4 className={`${textPrimary} font-semibold mb-4`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${textMuted} ${social.color} transition-all duration-300 hover:scale-110 p-2 ${socialBg} rounded-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 퀵 링크 */}
            <div>
              <h4 className={`${textPrimary} font-semibold mb-6`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`${textMuted} ${
                        theme === "dark"
                          ? "hover:text-white"
                          : "hover:text-gray-100"
                      } transition-colors duration-300 flex items-center group`}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 서비스 */}
            <div>
              <h4 className={`${textPrimary} font-semibold mb-6`}>Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <div
                      className={`${textMuted} ${
                        theme === "dark"
                          ? "hover:text-white"
                          : "hover:text-gray-100"
                      } transition-colors duration-300 flex items-center group cursor-pointer`}
                    >
                      <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      {service.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 연락처 정보 */}
            <div>
              <h4 className={`${textPrimary} font-semibold mb-6`}>
                Get In Touch
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`${textMuted} ${
                        theme === "dark"
                          ? "hover:text-white"
                          : "hover:text-gray-100"
                      } transition-colors duration-300 flex items-center group`}
                    >
                      <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform">
                        {contact.icon}
                      </div>
                      <span className="group-hover:underline">
                        {contact.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA 버튼 */}
              <div className="mt-8">
                <a
                  href="mailto:hello@doomock.com"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>Start Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className={`border-t ${borderColor}`}></div>

        {/* 하단 바 */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 카피라이트 */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className={`${textMuted} text-sm`}>
                © {currentYear} doomock. All rights reserved.
              </p>
              <div
                className={`flex items-center space-x-1 ${textMuted} text-sm`}
              >
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Korea</span>
              </div>
            </div>

            {/* 추가 링크들 */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className={`${textMuted} ${
                  theme === "dark" ? "hover:text-white" : "hover:text-gray-100"
                } transition-colors`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`${textMuted} ${
                  theme === "dark" ? "hover:text-white" : "hover:text-gray-100"
                } transition-colors`}
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className={`flex items-center space-x-2 ${textMuted} ${
                  theme === "dark" ? "hover:text-white" : "hover:text-gray-100"
                } transition-all duration-300 hover:scale-105 group`}
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 기술 스택 표시 */}
        <div
          className={`${techStackBg} backdrop-blur-sm transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div
              className={`flex flex-wrap justify-center items-center space-x-6 text-xs ${textMuted}`}
            >
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Next.js</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>TypeScript</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Tailwind CSS</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Framer Motion</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Vercel</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 맨 위로 가기 플로팅 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
