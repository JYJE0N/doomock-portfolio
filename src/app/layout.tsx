// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    url: "https://doomock-portfolio.com",
    siteName: "doomock Portfolio",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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

  // 완성된 파비콘 설정
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/web-app-manifest-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/web-app-manifest-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // 언어 설정
  alternates: {
    canonical: "https://doomock-portfolio.com",
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
      suppressHydrationWarning
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

        {/* 다크모드 플리커 방지 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="scroll-smooth">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
