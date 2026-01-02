import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Import new font
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// 2. Configure the font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Changed variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "GET OUT | The Nightlife App",
  description: "Discover the best events and parties near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the variable and class name */}
      <body className={jakarta.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}