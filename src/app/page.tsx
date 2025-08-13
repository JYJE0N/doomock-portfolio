// src/app/page.tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProjectsGallery />
      <Contact />
      {/* 다음 섹션들 */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">Footer가 올 자리</h2>
      </section>
    </main>
  );
}
