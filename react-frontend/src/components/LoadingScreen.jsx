import { useEffect, useState } from 'react';
import '../loading.css';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 800;
    
    const waitForFont = async () => {
      try {
        const font = new FontFace('Londrina Shadow', 'url(https://fonts.gstatic.com/s/londrinashadow/v18/7Au1p_8ykD-cDz3zeONFX4U3BqEMEb6SfOcgEHOsqfQ.woff2)');
        await font.load();
        document.fonts.add(font);
        
        await document.fonts.ready;
        
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          document.body.classList.add('font-loaded');
          setIsVisible(false);
        }, remainingTime);
        
      } catch (error) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          document.body.classList.add('font-loaded');
          setIsVisible(false);
        }, remainingTime);
      }
    };

    waitForFont();

    const fallbackTimer = setTimeout(() => {
      document.body.classList.add('font-loaded');
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="hero-loading">
      <div className="loading-container">
        <div className="loading-dot"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
