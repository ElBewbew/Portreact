"use client";
import '../../styles/presentation.css';
import { useEffect, useRef } from 'react';

const Presentation: React.FC = () => {
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
    <div className="relative min-h-screen flex flex-col"> {/* Couleur de fond beaucoup plus sombre et utilisation de Flexbox */}
      <div
        ref={lightRef}
        className="light"
      ></div>
      <div className="w-full h-[300px] flex items-center justify-center"> {/* Section pour le titre */}
        <h1 className="text-4xl">Bienvenue sur mon <span className="text-galaxy">Portfolio</span>.<br />
        <p></p>    </h1>
      </div>
      <div className="relative flex-1 flex flex-col items-center justify-center p-4 space-y-16 ml-64"> {/* Conteneur principal avec flex pour les trois colonnes */}
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>
            Bonjour, je m'appelle [Votre Nom] et je suis développeur web. 
            Voici une présentation de mes projets et compétences.
          </p>
          <h2>Projets</h2>
          <ul>
            <li>Projet 1: Description du projet 1</li>
            <li>Projet 2: Description du projet 2</li>
            <li>Projet 3: Description du projet 3</li>
          </ul>
          <h2>Compétences</h2>
          <ul>
            <li>Compétence 1</li>
            <li>Compétence 2</li>
            <li>Compétence 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;