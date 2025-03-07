import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'AI Language Translator | Translate Text with Ease',
  description: 'Free AI-powered language translation tool. Instantly translate between English, French, German, and Spanish with voice input support.',
  keywords: 'translator, translation, language translator, AI translation, voice translation, online translator, free language translation',
  openGraph: {
    title: 'AI Translation Tool | Translate Text with Ease',
    description: 'Free AI-powered language translation tool with voice input support',
    siteName: 'AI Translator',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
