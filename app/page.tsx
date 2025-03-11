"use client";
import '../styles/globals.css';
import { useEffect, useRef } from 'react';

export default function Home() {
  const lightRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const lightX = useRef(0);
  const lightY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const updateLightPosition = () => {
      if (lightRef.current) {
        lightX.current += (mouseX.current - lightX.current) * 0.01; // Rendre le mouvement plus lent
        lightY.current += (mouseY.current - lightY.current) * 0.01; // Rendre le mouvement plus lent
        lightRef.current.style.left = `${lightX.current}px`;
        lightRef.current.style.top = `${lightY.current}px`;
      }
      requestAnimationFrame(updateLightPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateLightPosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020b05] text-white flex"> {/* Couleur de fond beaucoup plus sombre et utilisation de Flexbox */}
      <div
        ref={lightRef}
        className="absolute w-[400px] h-[400px] bg-[#315fe7] rounded-full pointer-events-none" // Taille de la boule
        style={{ mixBlendMode: 'screen', transform: 'translate(-50%, -50%)', filter: 'blur(250px)' }} // Effet de flou
      ></div>
      <nav className="fixed top-0 left-0 h-full w-64 p-4 flex flex-col justify-center"> {/* Centrer les éléments verticalement et déplacer plus à droite */}
        <ul className="space-y-8"> {/* Espacement plus grand entre les éléments */}
          <li><a href="#home" className="block p-4 text-xl rounded hover-bg-blur">Présentation</a></li> {/* Éléments plus gros */}
          <li><a href="#about" className="block p-4 text-xl rounded hover-bg-blur">Projets</a></li> {/* Éléments plus gros */}
          <li><a href="#services" className="block p-4 text-xl rounded hover-bg-blur">Stages</a></li> {/* Éléments plus gros */}
          <li><a href="#veille" className="block p-4 text-xl rounded hover-bg-blur">Veilles</a></li> {/* Éléments plus gros */}
          <li><a href="#contacts" className="block p-4 text-xl rounded hover-bg-blur">Contacts</a></li> {/* Éléments plus gros */}
        </ul>
      </nav>
      <div className="flex flex-1 ml-64"> {/* Conteneur principal avec flex pour les trois colonnes */}
        <div className="flex flex-col items-center justify-center w-1/3 p-4"> {/* Colonne du logo et des éléments en dessous */}
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-8"> {/* Conteneur de la bulle */}
            <img src="/images/logo.jpg" alt="Logo" className="w-32 h-32 rounded-full" /> {/* Image dans une bulle */}
          </div>
          <div className="flex flex-col items-center space-y-4"> {/* Conteneur des deux petits éléments en dessous */}
          </div>
        </div>
        <main className="flex-1 flex flex-col items-center justify-center p-4 space-y-16"> {/* Colonne des textes */}
          <section id="home" className="mb-16 text-left fade-in"> {/* Section Présentation */}
            <h2 className="text-2xl mb-4">Présentation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </section>
          <section id="about" className="mb-16 text-left fade-in"> {/* Section Projets */}
            <h2 className="text-2xl mb-4">Projets</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </section>
          <section id="services" className="mb-16 text-left fade-in"> {/* Section Stages */}
            <h2 className="text-2xl mb-4">Stages</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </section>
          <section id="veille" className="mb-16 text-left fade-in"> {/* Section Veilles */}
            <h2 className="text-2xl mb-4">Veilles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </section>
          <section id="contacts" className="mb-16 text-left fade-in"> {/* Section Contacts */}
            <h2 className="text-2xl mb-4">Contacts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </section>
          <div className="text-center mt-16 fade-in">
            <h1 className="text-4xl font-bold">Benny vanhoe</h1>
            <p className="mt-4">Portfolio</p>
          </div>
          <div className="text-center p-4 fade-in"> {/* Centrer le texte */}
            <p>© 2025 Benny vanhoe</p>
          </div>
        </main>
      </div>
    </div>
  );
}