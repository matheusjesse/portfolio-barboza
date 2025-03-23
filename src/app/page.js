import Banner from "@/components/Banner";
import Image from "next/image";
import Profile from '../utils/images/profile.jpg'
import ContactForm from "@/components/ContactForm";
import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen pb-20 max-w-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full row-start-2">
        <Banner />
        <AboutMe />
        <Certifications />
        <section id="contact" className="py-16 bg-white mb-24 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Sinta-se a vontade para entrar em contato</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <FloatingButton />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
          <div className="text-center text-sm text-black-300">
            <p>
              &copy; {new Date().getFullYear()} Matheus Barboza. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido usando <strong>Next.js</strong>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
