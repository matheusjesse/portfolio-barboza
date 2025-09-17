'use client';

import Script from 'next/script';

export default function Analytics() {
  // Umami Analytics (Open Source - Recomendado)
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC || 'https://cloud.umami.is/script.js';

  if (!umamiWebsiteId || umamiWebsiteId === 'your-website-id-here') {
    return null; // Não renderiza se não houver ID configurado
  }

  return (
    <Script
      src={umamiSrc}
      data-website-id={umamiWebsiteId}
      strategy="afterInteractive"
      async
    />
  );
}