import Banner from "@/components/Banner";
import WhoIAm from "@/components/WhoIAm";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import WhatIBuild from "@/components/WhatIBuild";
import NextTerritory from "@/components/NextTerritory";
import Contact from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <WhoIAm />
        <ExperienceTimeline />
        <WhatIBuild />
        <NextTerritory />
        <Contact />
      </main>

      <footer
        className="py-6 text-center text-sm border-t"
        style={{
          borderColor: 'var(--border-light)',
          background: 'var(--bg-white)',
          color: 'var(--text-light)',
        }}
      >
        © {new Date().getFullYear()} Matheus Barboza
      </footer>
    </>
  );
}