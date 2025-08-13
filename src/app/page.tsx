// src/app/page.tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProjectsGallery />
      <Contact />
      <Footer />
    </main>
  );
}
