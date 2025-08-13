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
    "창의적인 웹디자이너이자 프론트엔드 개발자 doomock의 포트폴리오입니다.",
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

  icons: {
    // 메인 파비콘들 (우선순위 순서로 배치)
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16 32x32",
      },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],

    // Apple 기기용 터치 아이콘
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    // 다양한 크기의 아이콘들
    other: [
      // PWA/Android 크롬용
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

  // PWA 매니페스트 연결
  manifest: "/site.webmanifest",

  // Open Graph
  openGraph: {
    title: "doomock - Web Designer & Frontend Developer",
    description: "창의적인 웹디자이너이자 프론트엔드 개발자의 포트폴리오",
    url: "https://doomock-portfolio.com",
    siteName: "doomock Portfolio",
    locale: "ko_KR",
    type: "website",
  },

  // 추가 메타 태그들
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="scroll-smooth">{children}</div>
      </body>
    </html>
  );
}
