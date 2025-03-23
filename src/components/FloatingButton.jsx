'use client'
import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rola suavemente
    });
  };

  // Verifica a posição do scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("sobre-mim"); // ID da seção "Sobre Mim"
      if (aboutMeSection) {
        const aboutMePosition = aboutMeSection.offsetTop;
        if (window.scrollY >= aboutMePosition) {
          setShowButton(true); // Mostra o botão se o scroll estiver na seção "Sobre Mim" ou abaixo
        } else {
          setShowButton(false); // Esconde o botão caso contrário
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpa o listener
  }, []);

  // Retorna o botão flutuante
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default FloatingButton;