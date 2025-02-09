import { Metadata } from "next";

export const metadataSEO: Metadata = {
  title: "مقام للخدمات الإعلانية | حلول إبداعية في التسويق والإنتاج الإعلامي",
  description:
    "مقام هي شركة متخصصة في تقديم خدمات التسويق الرقمي، التصوير الفوتوغرافي، إنتاج الفيديو، تنظيم الفعاليات، الطباعة والنشر، الاستشارات الإعلامية، وأكثر.",
  keywords: [
    "الإعلانات",
    "التسويق الرقمي",
    "إنتاج الفيديو",
    "التصوير الفوتوغرافي",
    "إدارة الفعاليات",
    "تصميم الجرافيك",
    "خدمات الطباعة",
    "إعلانات السوشيال ميديا",
    "وكالة إعلانية",
    "شركة مقام",
  ],
  authors: [{ name: "شركة مقام", url: "https://macame.com" }],
  openGraph: {
    title: "مقام للخدمات الإعلانية | حلول إبداعية في التسويق والإنتاج الإعلامي",
    description:
      "مقام تقدم حلولاً إبداعية في التسويق والإنتاج الإعلامي، مما يساعد الشركات على تحقيق نجاحها الرقمي.",
    url: "https://macame.com",
    siteName: "مقام للخدمات الإعلانية",
    locale: "ar_AR",
    type: "website",
    images: [
      {
        url: "https://macame.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شركة مقام للخدمات الإعلانية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@macame",
    title: "مقام للخدمات الإعلانية",
    description:
      "شركة مقام تقدم خدمات التسويق الرقمي، التصوير، الفيديو، الفعاليات، الطباعة، والاستشارات الإعلامية.",
    images: ["https://macame.com/images/twitter-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://macame.com",
  },
  metadataBase: new URL("https://macame.com"),
  other: {
    "viewport": "width=device-width, initial-scale=1",
    "charset": "UTF-8",
    "theme-color": "#ffffff", // Helps with browser UI theming
  },
};