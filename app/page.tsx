"use client";
import '../styles/globals.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const lightRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const lightX = useRef(0);
  const lightY = useRef(0);
  const [activeNav, setActiveNav] = useState('');

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

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Ajustez selon les besoins
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.remove('inactive');
        } else {
          entry.target.classList.remove('active');
          entry.target.classList.add('inactive');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'center' // Défilement au centre de l'écran
    });
  };

  return (
    <div className="relative min-h-screen bg-[#020b05] text-white flex flex-col"> {/* Couleur de fond beaucoup plus sombre et utilisation de Flexbox */}
      <div className="w-full h-[300px] flex items-center justify-center bg-[#]"> {/* Section pour le titre */}
        <h1 className="text-4xl">Bienvenue sur mon <span className="text-galaxy">Portfolio</span>.<br />
        <p>test</p>    </h1>
      </div>
      <div className="relative flex-1 flex"> {/* Conteneur principal avec flex pour les trois colonnes */}
        <div
          ref={lightRef}
          className="fixed inset-0 w-[700px] h-[700px] bg-[#000fef] rounded-full pointer-events-none" // Taille de la boule
          style={{ mixBlendMode: 'screen', transform: 'translate(-50%, -50%)', filter: 'blur(400px)' }} // Effet de flou
        ></div>
        <nav className="fixed top-0 left-0 h-full w-64 p-4 flex flex-col justify-center"> {/* Centrer les éléments verticalement et déplacer plus à droite */}
          <ul className="space-y-8"> {/* Espacement plus grand entre les éléments */}
            <li>
              <a
                href="#home"
                className={`block p-4 text-xl rounded hover-bg-blur nav-item ${activeNav === 'home' ? 'active text-galaxy' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                - Présentation
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block p-4 text-xl rounded hover-bg-blur nav-item ${activeNav === 'about' ? 'active text-galaxy' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                - Projets
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`block p-4 text-xl rounded hover-bg-blur nav-item ${activeNav === 'services' ? 'active text-galaxy' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                - Stages
              </a>
            </li>
            <li>
              <a
                href="#veille"
                className={`block p-4 text-xl rounded hover-bg-blur nav-item ${activeNav === 'veille' ? 'active text-galaxy' : ''}`}
                onClick={() => handleNavClick('veille')}
              >
                - Veilles
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={`block p-4 text-xl rounded hover-bg-blur nav-item ${activeNav === 'contacts' ? 'active text-galaxy' : ''}`}
                onClick={() => handleNavClick('contacts')}
              >
                - Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 ml-64"> {/* Conteneur principal avec flex pour les trois colonnes */}
          <div className="flex flex-col items-center justify-start w-1/3 p-4 fixed top-0 mt-[300px]"> {/* Colonne du logo et des éléments en dessous */}
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-8"> {/* Conteneur de la bulle */}
              <img src="/images/logo.jpg" alt="Logo" className="w-38 h-38 rounded-full" /> {/* Image dans une bulle */}
            </div>
            <div className="flex space-x-4"> 
              <div className="w-40 h-10 text-black rounded-full flex items-center justify-center">
                <span className="text-galaxy">Benoit VANHOENACKER</span>
              </div>
              <div className="w-20 h-10 text-black rounded-full flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/30px-Flag_of_France.svg.png" 
                    alt="FR" width="50" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 mt-8"> {/* Conteneur des 5 autres bulles pour des logos */}
              <div className="w-15 h-15 bg-white text-black rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/benny_vanho/"><img src="/images/logoInsta.png" alt="Logo" className="w-14.5 h-14.5 rounded-full" /> {/* Image dans une bulle */}</a>
              </div>
              <div className="w-15 h-15 bg-white text-black rounded-full flex items-center justify-center">
                <a href="https://github.com/ElBewbew"><img src="/images/logoGit.png" alt="Logo" className="w-14.5 h-14.5 rounded-full" /> {/* Image dans une bulle */}</a>
                
              </div>
            </div>
          </div>
          <main className="flex-1 flex flex-col items-center justify-center p-4 space-y-16 ml-64 "> {/* Colonne des textes */}
            <section id="home" className="section section-home fade-in-left"> {/* Section Présentation */}
              <h2 className="text-2xl mb-4 pulse-bar">Présentation</h2>
              <div className="fade-in-left">
              <p>Je suis un jeune développeur, étudiant en <span className="text-galaxy">BTS SIO</span> sio à dominique villars.
              Dans la vie de tous les jours, je suis un grand joueur de jeux vidéos et un grand fan d'animés ainsi que de motos !<br />
              J'habite actuellement sur GAP et je souahite plus tard faire ma vie sur AIX. </p>
              </div>
              <div>
                
              </div>
            </section>
            <section id="about" className="section section-about fade-in-left"> {/* Section Projets */}
              <h2 className="text-2xl mb-4 pulse-bar">Projets</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </section>
            <section id="services" className="section section-services fade-in-left"> {/* Section Stages */}
              <h2 className="text-2xl mb-4 pulse-bar">Stages</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </section>
            <section id="veille" className="section section-veille fade-in-left"> {/* Section Veilles */}
              <h2 className="text-2xl mb-4 pulse-bar">Veilles</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </section>
            <section id="contacts" className="section section-contacts fade-in-left"> {/* Section Contacts */}
              <h2 className="text-2xl mb-4 pulse-bar">Contacts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </section>
            <div className="section section-contacts text-center mt-16 fade-in-left">
              <h1 className="text-4xl pulse-bar">Benny vanhoe</h1>
              <p className="mt-4">Portfolio</p>
            </div>
            <div className="section section-contacts text-center p-4 fade-in-left"> {/* Centrer le texte */}
              <p>© 2025 Benny vanhoe</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}