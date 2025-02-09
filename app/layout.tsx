import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { metadataSEO } from "@/constants/metadata";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "700", "900"], // Adjust weights as needed
});

export const metadata: Metadata = metadataSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="شركة مقام" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://macame.com" />

        {/* Structured Data (JSON-LD) for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "مقام للخدمات الإعلانية",
              url: "https://macame.com",
              logo: "https://macame.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/macame",
                "https://twitter.com/macame",
                "https://www.instagram.com/macame",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}