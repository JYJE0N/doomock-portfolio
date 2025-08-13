import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "doomock - Web Designer & Frontend Developer",
  description:
    "창의적인 웹디자이너이자 프론트엔드 개발자 doomock의 포트폴리오입니다. UI/UX 디자인부터 React 개발까지, 사용자 중심의 웹 경험을 만듭니다.",
  keywords: [
    "웹디자인",
    "UI/UX",
    "프론트엔드",
    "React",
    "Next.js",
    "포트폴리오",
    "doomock",
  ],
  authors: [{ name: "doomock" }],
  creator: "doomock",

  // Open Graph (소셜 미디어 공유용)
  openGraph: {
    title: "doomock - Web Designer & Frontend Developer",
    description: "창의적인 웹디자이너이자 프론트엔드 개발자의 포트폴리오",
    url: "https://doomock-portfolio.com", // 실제 도메인으로 변경
    siteName: "doomock Portfolio",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // 나중에 추가할 이미지
        width: 1200,
        height: 630,
        alt: "doomock Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "doomock - Web Designer & Frontend Developer",
    description: "창의적인 웹디자이너이자 프론트엔드 개발자의 포트폴리오",
    images: ["/og-image.jpg"],
  },

  // 추가 메타 태그들
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 파비콘 (간단 버전)
  icons: {
    icon: "/favicon.ico",
  },

  // 언어 설정
  alternates: {
    canonical: "https://doomock-portfolio.com", // 실제 도메인으로 변경
    languages: {
      "ko-KR": "https://doomock-portfolio.com",
      "en-US": "https://doomock-portfolio.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={inter.variable}
    >
      <head>
        {/* 추가 메타 태그들 */}
        <meta
          name="theme-color"
          content="#2563eb"
        />
        <meta
          name="color-scheme"
          content="light dark"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* 프리로드 중요 리소스 */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD 구조화 데이터 (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "doomock",
              jobTitle: "Web Designer & Frontend Developer",
              description: "창의적인 웹디자이너이자 프론트엔드 개발자",
              url: "https://doomock-portfolio.com",
              sameAs: [
                "https://github.com/JYJE0N",
                // "https://linkedin.com/in/doomock",
                // "https://twitter.com/doomock"
              ],
              knowsAbout: [
                "Web Design",
                "UI/UX Design",
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Seoul",
                addressCountry: "KR",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* 스크롤 부드럽게 */}
        <div className="scroll-smooth">{children}</div>

        {/* 글로벌 스타일 */}
        <style
          jsx
          global
        >{`
          html {
            scroll-behavior: smooth;
          }

          /* 커스텀 스크롤바 */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f5f9;
          }

          ::-webkit-scrollbar-thumb {
            background: #2563eb;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #1d4ed8;
          }
        `}</style>
      </body>
    </html>
  );
}
