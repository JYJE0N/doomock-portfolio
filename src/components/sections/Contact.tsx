"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Calendar,
  Coffee,
  Heart,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 폼 제출 로직 (예: Netlify Forms, Formspree 등)
    try {
      // 여기에 실제 API 호출 로직을 추가하세요
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 임시 지연

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "이메일",
      value: "hello@doomock.com",
      description: "24시간 내 답변드려요",
      action: "mailto:hello@doomock.com",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "전화",
      value: "+82 10-1234-5678",
      description: "평일 9시-18시",
      action: "tel:+821012345678",
      color: "bg-green-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "위치",
      value: "수원, 경기도",
      description: "대면 미팅 가능",
      action: "https://maps.google.com/?q=수원시",
      color: "bg-red-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "커피챗",
      value: "언제든 환영해요",
      description: "프로젝트 논의",
      action: "https://calendly.com/doomock",
      color: "bg-amber-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/doomock",
      color: "hover:bg-gray-800",
      description: "코드 & 프로젝트",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/doomock",
      color: "hover:bg-blue-600",
      description: "경력 & 네트워킹",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Kakao",
      url: "https://open.kakao.com/o/doomock",
      color: "hover:bg-yellow-400",
      description: "빠른 소통",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      name: "Calendar",
      url: "https://calendly.com/doomock",
      color: "hover:bg-indigo-600",
      description: "미팅 예약",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let Us Work <span className="text-blue-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶어요. 언제든 편하게
            연락주세요!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 왼쪽: 연락 방법들 */}
          <div className="space-y-12">
            {/* 연락 카드들 */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={
                    method.action.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    method.action.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div
                    className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {method.title}
                  </h3>
                  <p className="text-blue-200 font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </a>
              ))}
            </div>

            {/* 소셜 링크들 */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">
                다른 플랫폼에서도 만나요
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white/10 backdrop-blur-sm p-4 rounded-xl ${social.color} transition-all duration-300 hover:scale-105 flex items-center space-x-3`}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium">{social.name}</p>
                      <p className="text-gray-400 text-xs">
                        {social.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-6 h-6 text-red-400" />
                <h3 className="text-white font-semibold text-lg">
                  함께 만들어가요
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                작은 아이디어부터 큰 프로젝트까지, 모든 협업을 환영합니다.
                창의적인 솔루션과 완성도 높은 결과물로 보답하겠습니다.
              </p>
            </div>
          </div>

          {/* 오른쪽: 연락 폼 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="mb-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                메시지 보내기
              </h3>
              <p className="text-gray-300">프로젝트에 대해 자세히 알려주세요</p>
            </div>

            <div
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  제목 *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                  placeholder="프로젝트 협업 제안"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  메시지 *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all resize-none"
                  placeholder="프로젝트에 대해 자세히 설명해주세요..."
                />
              </div>

              {/* 상태 메시지 */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>메시지가 성공적으로 전송되었습니다!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>전송 중 오류가 발생했습니다. 다시 시도해주세요.</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>메시지 보내기</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 하단 CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-white text-2xl font-bold mb-4">
              🚀 지금 바로 시작해보세요!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              아이디어가 있으시다면 주저하지 마세요. 함께 멋진 프로젝트를 만들어
              나가요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@doomock.com"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>이메일로 시작하기</span>
              </a>
              <a
                href="https://calendly.com/doomock"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>미팅 예약하기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
