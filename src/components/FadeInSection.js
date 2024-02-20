import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current; // Copie de domRef.current dans une variable locale
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentRef);
        }
      });
    });
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef); // Utilisation de la variable locale dans la fonction de nettoyage
    };
  }, []); // La liste de dépendances vide signifie que cet effet s'exécutera une fois après le premier rendu

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
