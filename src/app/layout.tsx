import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quran",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0E493E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://furqanlearn.com"),
  title: {
    default: "Furqan Learn Academy | Learn Quran, Arabic & Islamic Studies Online",
    template: "%s | Furqan Learn Academy",
  },
  description:
    "Learn Quran with clarity. Premier online Quran, Arabic & Islamic Studies academy with certified Azhari scholars. 1-on-1 personalized classes, live AI Tajweed feedback, and accredited Ijazah certificates.",
  keywords: [
    "Furqan Learn",
    "Furqan Learn Academy",
    "Quran online",
    "learn Quran",
    "Tajweed rules",
    "Arabic lessons",
    "Islamic studies",
    "Ijazah sanad",
    "Hifz program",
    "Noor Al-Bayan",
    "Al-Azhar scholars",
  ],
  authors: [{ name: "Furqan Learn Academy" }],
  creator: "Furqan Learn Academy",
  publisher: "Furqan Learn Academy",
  alternates: {
    canonical: "https://furqanlearn.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furqanlearn.com",
    siteName: "Furqan Learn Academy",
    title: "Furqan Learn Academy | Learn Quran with Clarity",
    description:
      "Modern Islamic learning, rooted in tradition. 1-on-1 Quran, Arabic, and Islamic Studies with Al-Azhar certified tutors and AI Tajweed Coach.",
    images: [
      {
        url: "/images/furqan-logo.webp",
        width: 1200,
        height: 630,
        alt: "Furqan Learn Academy Online Quran & Arabic Classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furqan Learn Academy | Learn Quran with Clarity",
    description:
      "Modern Islamic learning, rooted in tradition. 1-on-1 Quran, Arabic, and Islamic Studies with Al-Azhar certified tutors.",
    images: ["/images/furqan-logo.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Furqan Learn Academy",
  "url": "https://furqanlearn.com",
  "logo": "https://furqanlearn.com/images/furqan-logo-transparent.webp",
  "description":
    "Premier online Quran, Arabic & Islamic Studies academy with certified Azhari scholars. 1-on-1 classes, AI Tajweed Coach, and accredited Ijazah certificates.",
  "sameAs": [
    "https://wa.me/201063204740",
    "https://www.facebook.com/furqanlearn",
    "https://www.instagram.com/furqanlearn/",
    "https://www.youtube.com/@furqanlearn"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201063204740",
    "contactType": "customer service",
    "availableLanguage": ["English", "Arabic"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${manrope.variable} ${ibmPlexSansArabic.variable} ${notoNaskhArabic.variable} h-full antialiased scroll-smooth overflow-x-clip`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-graphite overflow-x-clip relative">
        {/* Global Dignified Royal Islamic Background System */}
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden" aria-hidden="true">
          {/* 1. Base Luminous Pure Ivory Surface (Clean, No Yellow Cast) */}
          <div className="absolute inset-0 bg-[#FAF9F5]" />

          {/* 2. Soft Ambient Emerald Whispers on Side Margins (Zero Yellow on Menu) */}
          <div className="absolute top-[8%] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(14,73,62,0.04)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute top-[12%] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(14,73,62,0.04)_0%,transparent_70%)] blur-3xl" />

          {/* 3. Seamless Islamic Geometric Arabesque Watermark */}
          <div className="absolute inset-0 islamic-royal-watermark" />
        </div>

        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
