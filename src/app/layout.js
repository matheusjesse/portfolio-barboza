import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matheus Barboza - Desenvolvedor Full-Stack Web e Mobile",
  description: "Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript, Flutter e React Native. Criando aplicações modernas e escaláveis com foco em performance e UX/UI.",
  keywords: [
    "Matheus Barboza",
    "Desenvolvedor Full-Stack",
    "React Developer",
    "Node.js Developer", 
    "TypeScript",
    "Flutter Developer",
    "React Native",
    "Frontend Developer",
    "Backend Developer",
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "JavaScript",
    "Portfólio",
    "UX/UI Designer",
    "API REST",
    "Docker",
    "Git",
    "MySQL",
    "PostgreSQL",
    "MongoDB"
  ].join(", "),
  authors: [{ name: "Matheus Barboza" }],
  creator: "Matheus Barboza",
  publisher: "Matheus Barboza",
  robots: "index, follow",
  canonical: "https://www.matheusbarboza.com",
  
  // Open Graph para redes sociais
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.matheusbarboza.com",
    title: "Matheus Barboza - Desenvolvedor Full-Stack Web e Mobile",
    description: "Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript, Flutter e React Native. Criando aplicações modernas e escaláveis.",
    siteName: "Matheus Barboza Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Vamos criar esta imagem
        width: 1200,
        height: 630,
        alt: "Matheus Barboza - Desenvolvedor Full-Stack",
      },
    ],
  },
  
  // Para aplicativos mobile
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  
  // Verificação de site (quando configurar)
  verification: {
    google: "seu-codigo-google-aqui", // Adicionar quando configurar Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
      />
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <StructuredData />
        <Header />
        {children}
      </body>
    </html>
  );
}
