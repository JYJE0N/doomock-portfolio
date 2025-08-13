// src/app/page.tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* 스크롤 테스트용 섹션 */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">
          About 섹션이 올 자리
        </h2>
      </section>
    </main>
  );
}
