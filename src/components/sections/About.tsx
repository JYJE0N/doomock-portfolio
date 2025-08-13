"use client";

import { useState } from "react";
import {
  Code,
  Palette,
  Monitor,
  Lightbulb,
  Download,
  Award,
  Heart,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Figma", level: 95 },
        { name: "Photoshop", level: 95 },
        { name: "Illustrator", level: 85 },
        { name: "Sketch", level: 80 },
      ],
    },
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 70 },
        { name: "TypeScript", level: 65 },
      ],
    },
    {
      category: "Tools",
      icon: <Monitor className="w-6 h-6" />,
      items: [
        { name: "VS Code", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 75 },
      ],
    },
  ];

  const experiences = [
    {
      year: "2025",
      title: "Next.js 포트폴리오 프로젝트",
      description:
        "TypeScript와 Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트 개발",
    },
    {
      year: "2023",
      title: "웹디자인 프리랜서",
      description:
        "다양한 클라이언트의 브랜드 아이덴티티 및 웹사이트 디자인 작업",
    },
    {
      year: "2022",
      title: "디자인 스킬 심화학습",
      description: "UI/UX 디자인 원칙과 모던 웹 트렌드 연구 및 적용",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "창의적 사고",
      description:
        "새로운 아이디어와 독창적인 솔루션을 통해 사용자에게 특별한 경험을 제공합니다.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "사용자 중심",
      description:
        "항상 사용자의 관점에서 생각하며, 직관적이고 접근성 높은 디자인을 추구합니다.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "지속적 성장",
      description:
        "끊임없는 학습과 도전을 통해 더 나은 디자이너이자 개발자가 되고자 합니다.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            웹디자이너에서 개발자로 성장하며, 디자인과 기술의 완벽한 조화를
            추구합니다.
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 프로필 & 소개 */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                안녕하세요, doomock입니다!
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  웹디자인의 세계에서 시작해 현재는 프론트엔드 개발까지 영역을
                  넓혀가고 있는 크리에이티브 디자이너입니다.
                </p>
                <p>
                  사용자의 니즈를 깊이 이해하고, 그것을 아름답고 기능적인
                  인터페이스로 구현하는 것이 저의 가장 큰 즐거움입니다.
                </p>
                <p>
                  디자인 감각과 개발 스킬을 결합하여, 단순히 보기 좋은 것을
                  넘어서 실제로 사용하기 편한 웹 경험을 만들어갑니다.
                </p>
              </div>
            </div>

            {/* 개인 정보 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                개인 정보
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">이름:</span>
                  <p className="font-medium text-gray-900">doomock</p>
                </div>
                <div>
                  <span className="text-gray-500">전문분야:</span>
                  <p className="font-medium text-gray-900">Web Design</p>
                </div>
                <div>
                  <span className="text-gray-500">경력:</span>
                  <p className="font-medium text-gray-900">13 Years</p>
                </div>
                <div>
                  <span className="text-gray-500">위치:</span>
                  <p className="font-medium text-gray-900">Suwon, Korea</p>
                </div>
              </div>

              <button className="mt-6 flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>이력서 다운로드</span>
              </button>
            </div>
          </div>

          {/* 탭 콘텐츠 */}
          <div>
            {/* 탭 메뉴 */}
            <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-lg mb-6">
              {["skills", "experience", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab === "skills" && "Skills"}
                  {tab === "experience" && "Experience"}
                  {tab === "values" && "Values"}
                </button>
              ))}
            </div>

            {/* 탭 내용 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[400px]">
              {activeTab === "skills" && (
                <div className="space-y-8">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-blue-600">{skillGroup.icon}</div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    주요 경험
                  </h4>
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6 pb-6"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {exp.year}
                        </span>
                        <h5 className="text-lg font-semibold text-gray-900">
                          {exp.title}
                        </h5>
                      </div>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "values" && (
                <div className="space-y-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    나의 가치관
                  </h4>
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex space-x-4"
                    >
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h5>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
