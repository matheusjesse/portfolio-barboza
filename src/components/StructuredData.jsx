'use client';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matheus Barboza",
    "jobTitle": "Desenvolvedor Full-Stack",
    "description": "Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript, Flutter e React Native",
    "url": "https://www.matheusbarboza.com",
    "image": "https://www.matheusbarboza.com/profile.jpg",
    "sameAs": [
      "https://github.com/matheusjesse",
      "https://linkedin.com/in/matheusjesse", // Adicione seu LinkedIn
      // Adicione outras redes sociais
    ],
    "knowsAbout": [
      "React",
      "Node.js", 
      "TypeScript",
      "JavaScript",
      "Flutter",
      "React Native",
      "Docker",
      "Git",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "API REST",
      "UX/UI Design",
      "Tailwind CSS",
      "Next.js",
      "Express.js"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "RJ" // Ajuste conforme sua localização
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Matheus Barboza Portfolio",
    "description": "Portfólio profissional de Matheus Barboza - Desenvolvedor Full-Stack",
    "url": "https://www.matheusbarboza.com",
    "author": {
      "@type": "Person",
      "name": "Matheus Barboza"
    },
    "inLanguage": "pt-BR"
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Portfolio de Matheus Barboza",
    "description": "Coleção de projetos e trabalhos desenvolvidos por Matheus Barboza",
    "author": {
      "@type": "Person",
      "name": "Matheus Barboza"
    },
    "about": [
      {
        "@type": "SoftwareApplication",
        "name": "Notas App Flutter",
        "description": "Aplicativo Flutter para gerenciamento de notas com SQLite e CI/CD",
        "applicationCategory": "MobileApplication",
        "operatingSystem": "Android, iOS"
      },
      {
        "@type": "SoftwareApplication", 
        "name": "Carteira Digital Full-Stack",
        "description": "Sistema completo de carteira digital com autenticação JWT",
        "applicationCategory": "WebApplication",
        "programmingLanguage": ["React", "Node.js", "TypeScript"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "ToDo API",
        "description": "API completa para gerenciamento de tarefas com autenticação JWT",
        "applicationCategory": "WebApplication",
        "programmingLanguage": ["Node.js", "TypeScript", "Express"]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
    </>
  );
}