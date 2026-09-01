import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata = {
  metadataBase: new URL("https://www.matheusbarboza.com"),
  title: "Matheus Barboza — Desenvolvedor Mobile",
  description: "Desenvolvedor mobile experiente em React Native, Expo e TypeScript. Atenção a UX e em expansão para Gestão de Produto.",
  keywords: [
    "Matheus Barboza",
    "Desenvolvedor Mobile",
    "React Native",
    "Expo",
    "TypeScript",
    "iOS",
    "Android",
    "UX",
    "Product Manager",
    "Gestão de Produto",
    "Portfólio",
  ].join(", "),
  authors: [{ name: "Matheus Barboza" }],
  creator: "Matheus Barboza",
  publisher: "Matheus Barboza",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.matheusbarboza.com",
    title: "Matheus Barboza — Desenvolvedor Mobile",
    description: "Desenvolvedor mobile experiente com atenção a UX e em expansão para Gestão de Produto.",
    siteName: "Matheus Barboza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matheus Barboza — Desenvolvedor Mobile",
      },
    ],
  },
  verification: {
    google: "google0c58a21f86560f96",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="antialiased">
        <Analytics />
        <StructuredData />
        <Header />
        {children}
      </body>
    </html>
  );
}
