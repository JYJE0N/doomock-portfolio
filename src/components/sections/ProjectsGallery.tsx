"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Github,
  Lightbulb,
  Palette,
  Code,
  Edit,
  Play,
  Pause,
  Search,
} from "lucide-react";

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  const categories = [
    {
      name: "전체",
      icon: "🎯",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "기획",
      icon: <Lightbulb className="w-4 h-4" />,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      name: "디자인",
      icon: <Palette className="w-4 h-4" />,
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
      name: "개발",
      icon: <Code className="w-4 h-4" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      name: "컨텐츠",
      icon: <Edit className="w-4 h-4" />,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "브랜드 아이덴티티 시스템",
      category: "기획",
      description:
        "신규 스타트업을 위한 완전한 브랜드 아이덴티티 구축 프로젝트",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["브랜딩", "전략기획", "가이드라인"],
      year: "2024",
      client: "TechStart Inc.",
      duration: "3개월",
      challenge: "제로베이스에서 시작하는 브랜드의 일관된 아이덴티티 구축",
      solution:
        "시장 조사부터 브랜드 포지셔닝, 비주얼 아이덴티티까지 체계적 접근",
      result: "브랜드 인지도 300% 증가, 일관된 커뮤니케이션 달성",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "모바일 앱 UI/UX 디자인",
      category: "디자인",
      description:
        "사용자 경험을 중심으로 한 직관적인 모바일 앱 인터페이스 디자인",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["UI/UX", "모바일", "프로토타입"],
      year: "2024",
      client: "FoodDelivery Co.",
      duration: "2개월",
      challenge: "복잡한 주문 프로세스를 간단하고 직관적으로 만들기",
      solution: "사용자 여정 맵핑과 다중 테스트를 통한 최적화된 UX 설계",
      result: "주문 완료율 40% 향상, 사용자 만족도 95% 달성",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "React 대시보드 개발",
      category: "개발",
      description: "실시간 데이터 분석을 위한 반응형 관리자 대시보드 구축",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "D3.js"],
      year: "2024",
      client: "DataAnalytics Pro",
      duration: "4개월",
      challenge: "대용량 데이터의 실시간 시각화와 성능 최적화",
      solution: "가상화 기술과 효율적인 상태 관리로 부드러운 사용자 경험 구현",
      result: "데이터 로딩 속도 70% 개선, 관리 효율성 대폭 향상",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "브랜드 영상 콘텐츠",
      category: "컨텐츠",
      description: "브랜드 스토리텔링을 위한 감성적인 영상 콘텐츠 제작",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      tags: ["영상제작", "스토리텔링", "브랜딩"],
      year: "2024",
      client: "Creative Agency",
      duration: "1개월",
      challenge: "짧은 시간 안에 브랜드 가치를 효과적으로 전달하기",
      solution: "감정적 연결을 만드는 스토리텔링과 시각적 임팩트 극대화",
      result: "브랜드 인지도 향상, SNS 공유율 500% 증가",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "E-commerce 웹사이트",
      category: "개발",
      description: "Next.js 기반의 고성능 온라인 쇼핑몰 구축",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      year: "2023",
      client: "Fashion Brand",
      duration: "5개월",
      challenge: "높은 트래픽과 복잡한 결제 시스템 안정적 운영",
      solution: "서버리스 아키텍처와 CDN 최적화로 글로벌 서비스 구현",
      result: "페이지 로딩 속도 50% 개선, 전환율 25% 향상",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "브랜드 리뉴얼 프로젝트",
      category: "디자인",
      description: "기존 브랜드의 현대적 재해석과 비주얼 시스템 구축",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      tags: ["리브랜딩", "로고디자인", "가이드라인"],
      year: "2023",
      client: "Traditional Company",
      duration: "3개월",
      challenge: "전통과 현대성의 균형을 맞춘 브랜드 아이덴티티 구축",
      solution: "헤리티지 요소를 현대적 감각으로 재해석한 통합 디자인 시스템",
      result: "브랜드 호감도 60% 상승, 젊은 층 유입 증가",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "전체"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= filteredProjects.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredProjects.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsAutoPlaying(true);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            기획부터 개발까지, 창의적 아이디어가 현실이 되는 과정을 소개합니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                setCurrentSlide(0);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.name
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {typeof category.icon === "string" ? (
                <span className="text-lg">{category.icon}</span>
              ) : (
                category.icon
              )}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* 메인 캐러셀 */}
        <div className="relative mb-16">
          {/* 자동재생 컨트롤 */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-gray-600" />
              ) : (
                <Play className="w-4 h-4 text-gray-600" />
              )}
              <span className="text-sm text-gray-600">
                {isAutoPlaying ? "일시정지" : "자동재생"}
              </span>
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div
                    className="relative h-[500px] md:h-[600px] group cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    {/* 배경 이미지 */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* 콘텐츠 */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          <span className="text-blue-200 text-sm">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all group/btn">
                            <Search className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span>자세히 보기</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 화살표 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center space-x-2 mt-6">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 프로젝트 그리드 (미니 갤러리) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags
                    .slice(0, 3)
                    .map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="relative h-64 md:h-80">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-blue-200">{selectedProject.year}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* 모달 콘텐츠 */}
            <div className="p-8">
              {/* 프로젝트 정보 */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    클라이언트
                  </h4>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">기간</h4>
                  <p className="text-gray-600">{selectedProject.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">년도</h4>
                  <p className="text-gray-600">{selectedProject.year}</p>
                </div>
              </div>

              {/* 프로젝트 세부사항 */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    🎯 도전과제
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    💡 솔루션
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    📈 결과
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.result}
                  </p>
                </div>
              </div>

              {/* 태그 */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  기술 스택 & 도구
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>라이브 데모</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>소스 코드</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
