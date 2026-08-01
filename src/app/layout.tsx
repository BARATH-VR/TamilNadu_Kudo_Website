import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AdminProvider } from "@/context/AdminContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tamil Nadu State Kudo Association (TNSKA) — Official Website",
  description: "Official governing body of Kudo martial sport in Tamil Nadu. Affiliated with Kudo International Federation India (KIFI) & KIF Japan. Find academies, events, and results.",
  keywords: ["Tamil Nadu Kudo", "Kudo Tamil Nadu", "TNSKA", "KIFI India", "Martial Arts Chennai", "Kudo Academy Tamil Nadu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansTamil.variable}`}>
      <body className="antialiased bg-zinc-950 text-gray-100 min-h-screen flex flex-col">
        <LanguageProvider>
          <AdminProvider>
            {children}
          </AdminProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
