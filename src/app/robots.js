export default function robots() {
  const baseUrl = "https://www.matheusbarboza.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Se você tiver rotas de API que não devem ser indexadas
        "/_next/", // Arquivos internos do Next.js
        "/admin/", // Se você tiver área administrativa
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}