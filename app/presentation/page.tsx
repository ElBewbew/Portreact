"use client";
import '../../styles/presentation.css';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFile, faSchool, faMarker } from '@fortawesome/free-solid-svg-icons';

const Presentation: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const lightX = useRef(0);
  const lightY = useRef(0);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

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

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div>
      <nav className='fixed top-5 left-1/2 transform -translate-x-1/2 z-10 flex justify-between items-center h-13 w-75 border-1 text-white rounded-full px-3'>
        <div
          className={`logo-container ${activeIcon === 'house' ? 'active' : ''}`}
          onClick={() => handleIconClick('house')}
        >
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div
          className={`logo-container ${activeIcon === 'file' ? 'active' : ''}`}
          onClick={() => handleIconClick('file')}
        >
          <FontAwesomeIcon icon={faFile} />
        </div>
        <div
          className={`logo-container ${activeIcon === 'school' ? 'active' : ''}`}
          onClick={() => handleIconClick('school')}
        >
          <FontAwesomeIcon icon={faSchool} />
        </div>
        <div
          className={`logo-container ${activeIcon === 'marker' ? 'active' : ''}`}
          onClick={() => handleIconClick('marker')}
        >
          <FontAwesomeIcon icon={faMarker} />
        </div>
      </nav>
      <main className="relative min-h-screen bg-gradient-to-t from-black to-purple-800 text-white flex flex-col">
        <div className='content-container p-40'>
          {activeIcon === 'house' && (
            <>
              <div className='left-column'>
                <section className='bg-white text-black p-50 rounded-lg'>
                  <h1>1</h1>
                  <p>test</p>
                </section>
              </div>
              <div className='right-column'>
                <section className='bg-white text-black h-55 w-200 rounded-lg'>
                  <h1>2</h1>
                  <p>test</p>
                </section>
                <section className='bg-white text-black h-54 w-200 rounded-lg'>
                  <h1>3</h1>
                  <p>test</p>
                </section>
              </div>
            </>
          )}
          {activeIcon === 'file' && (
            <div>
              <h1>2</h1>
              <p>test</p>
            </div>
          )}
          {activeIcon === 'school' && (
            <div>
              <h1>3</h1>
              <p>test</p>
            </div>
          )}
          {activeIcon === 'marker' && (
            <div>
              <h1></h1>
              <p>test</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Presentation;