"use client";
import '../../styles/presentation.css';
import { useEffect, useRef } from 'react';

const Presentation: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const lightX = useRef(0);
  const lightY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      </div>
    </div>
  );
};

export default Presentation;