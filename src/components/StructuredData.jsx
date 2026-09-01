export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matheus Barboza",
    jobTitle: "Desenvolvedor Mobile",
    url: "https://www.matheusbarboza.com",
    sameAs: [
      "https://linkedin.com/in/matheusjesse",
      "https://github.com/matheusjesse",
    ],
    knowsAbout: ["React Native", "Expo", "TypeScript", "Mobile Development", "UX Design", "Product Management"],
    addressLocality: "Rio de Janeiro",
    addressCountry: "BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}