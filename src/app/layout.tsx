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

  // 파비콘
  icons: {
    icon: "/favicon.ico",
  },

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
