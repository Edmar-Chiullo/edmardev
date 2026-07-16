import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "edmardev",
  description: "Desenvolvedor freelancer especializado em soluções digitais",
  keywords: [
    "freelancer",
    "desenvolvedor",
    "soluções digitais",
    "web development",
    "programação",
    "tecnologia",
    "desenvolvedor web",
    "portfólio de desenvolvedor",
    "soluções digitais personalizadas",
    "site para empresas",
    "landing page",
    "Next.js",
    "React",
    "Edmar Dev"
  ],

  authors: [{ name: "Edmar Dev", url: "https://edmardev.com" }],
  creator: "Edmar Dev",
  openGraph: {
    title: "Edmar Dev - Freelancer",
    description: "Desenvolvedor freelancer especializado em soluções digitais",
    url: "https://edmardev.com",
    siteName: "Edmar Dev",
    images: [
      {
        url: "https://edmardev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edmar Dev - Freelancer",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Edmar Dev - Freelancer",
    description: "Desenvolvedor freelancer especializado em soluções digitais",
    images: ["https://edmardev.com/og-image.png"],
    creator: "@edmardev",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },


  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,     
    nosnippet: false,
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "black",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
