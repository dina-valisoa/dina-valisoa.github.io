import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    { path: "../../fonts/dm-sans/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../fonts/dm-sans/DMSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dina-valisoa.me"),
  title: {
    default: "Dina Valisoa RANDRIAMIFIDY — Fullstack Developer & AI Engineer",
    template: "%s | Dina Valisoa RANDRIAMIFIDY",
  },
  description:
    "Portfolio of Dina Valisoa RANDRIAMIFIDY, Fullstack Developer and AI Engineer based in Madagascar and France. FinTech platforms, ERP systems, and AI-powered applications.",
  keywords: [
    "Dina Valisoa Randriamifidy",
    "Fullstack Developer",
    "AI Engineer",
    "Software Engineer Madagascar",
    "Java Spring",
    "Next.js",
    "FinTech",
  ],
  authors: [{ name: "Dina Valisoa RANDRIAMIFIDY" }],
  creator: "Dina Valisoa RANDRIAMIFIDY",
  publisher: "Dina Valisoa RANDRIAMIFIDY",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Dina Valisoa RANDRIAMIFIDY — Fullstack Developer & AI Engineer",
    description:
      "Portfolio of Dina Valisoa RANDRIAMIFIDY, Fullstack Developer and AI Engineer based in Madagascar and France.",
    siteName: "Dina Valisoa RANDRIAMIFIDY",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dina Valisoa RANDRIAMIFIDY — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dina Valisoa RANDRIAMIFIDY — Fullstack Developer & AI Engineer",
    description:
      "Portfolio of Dina Valisoa RANDRIAMIFIDY, Fullstack Developer and AI Engineer based in Madagascar and France.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
