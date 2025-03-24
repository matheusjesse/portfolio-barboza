'use client'

import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSobreMim = () => {
    const sobreMimSection = document.getElementById('sobre-mim');
    if (sobreMimSection) {
      sobreMimSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    } 
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  };

  return (
      <div className="antialiased bg-gray-100 dark:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
                Matheus Barboza
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`${
                isOpen ? 'flex' : 'hidden'
              } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
              <a onClick={scrollToSobreMim} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
              Sobre Mim
              </a>
              <a onClick={scrollToContact} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                Contato
              </a>
              <div className="relative">
              <button
                  className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center gap-1 pt-1">
                    <FaLinkedin className="text-gray-800 dark:text-gray-200" />
                    <FaGithub className="text-gray-800 dark:text-gray-200" />
                    
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                      } md:-mt-1`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                {isDropdownOpen && (
                  <div className=" pt-6  absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700 ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                      <a 
                        href="https://www.linkedin.com/in/matheusjesse/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        <div className="bg-blue-500 text-white rounded-lg p-3">
                          <FaLinkedin className="md:h-6 md:w-6 h-4 w-4" />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">LinkedIn</p>
                          <p className="text-sm">Visite meu perfil no LinkedIn</p>
                        </div>
                      </a>
                      <a 
                        href="https://github.com/matheusjesse" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        <div className="bg-gray-800 text-white rounded-lg p-3">
                          <FaGithub className="md:h-6 md:w-6 h-4 w-4" />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">GitHub</p>
                          <p className="text-sm">Veja meus projetos no GitHub</p>
                        </div>
                      </a>
                        
                        {/* Outros itens do dropdown */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
    </div>
  );
}