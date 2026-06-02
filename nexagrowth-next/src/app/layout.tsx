import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "../components/PageLoader";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import CookieConsent from "../components/CookieConsent";
import ThemeProvider from "../components/ThemeProvider";
import Script from "next/script";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NexaGrowth — Pakistan's Premium Digital Growth Partner",
  description: "Scale your business with Awwwards-level web development, e-commerce systems, high-converting SEO, digital marketing, and premium branding. Real results, no fluff.",
  metadataBase: new URL("https://nexagrowth.xyz"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NexaGrowth — Pakistan's Premium Digital Growth Partner",
    description: "Scale your business with premium web development, high-converting SEO, and digital marketing strategies designed for serious results.",
    url: "https://nexagrowth.xyz",
    siteName: "NexaGrowth",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "NexaGrowth Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaGrowth — Pakistan's Premium Digital Growth Partner",
    description: "Scale your business with premium web development, high-converting SEO, and digital marketing strategies designed for serious results.",
    images: ["/logo.png"],
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexagrowth.xyz/#organization",
      "name": "NexaGrowth",
      "url": "https://nexagrowth.xyz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexagrowth.xyz/logo.png",
        "caption": "NexaGrowth Logo"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nexagrowth",
        "https://twitter.com/nexagrowth"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nexagrowth.xyz/#localbusiness",
      "name": "NexaGrowth",
      "image": "https://nexagrowth.xyz/logo.png",
      "url": "https://nexagrowth.xyz",
      "telephone": "+923000000000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.5204,
        "longitude": 74.3587
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup)
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-teal/30 selection:text-white overflow-x-hidden">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVCXYCKEVN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVCXYCKEVN');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6061397831292993"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ThemeProvider>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
