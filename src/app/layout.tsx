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
  // SportsOrganization Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Tamil Nadu State Kudo Association",
    "alternateName": ["TNSKA", "Tamil Nadu Kudo", "தமிழ்நாடு மாநில குடோ சங்கம்"],
    "url": "https://tnska-website.onrender.com",
    "logo": "https://tnska-website.onrender.com/favicon.ico",
    "sport": "Kudo Martial Arts",
    "description": "Official State Governing Body of Kudo in Tamil Nadu affiliated with Kudo International Federation India (KIFI) and KIF Japan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jawaharlal Nehru Stadium Complex, Periamet",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600003",
      "addressCountry": "IN"
    },
    "telephone": "+91 98400 12345",
    "email": "contact@tnkudo.org",
    "sameAs": [
      "https://github.com/BARATH-VR/TamilNadu_Kudo_Website"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${notoSansTamil.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
