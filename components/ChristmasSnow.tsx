'use client';

import { useEffect } from 'react';

export default function ChristmasSnow() {
  useEffect(() => {
    const snowflakes = ['❄', '❅', '❆'];
    const container = document.body;
    
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'christmas-snowflake';
      snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = String(Math.random() * 0.6 + 0.4);
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      
      container.appendChild(snowflake);
      
      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };
    
    // Create snowflakes periodically
    const interval = setInterval(createSnowflake, 300);
    
    return () => {
      clearInterval(interval);
      // Clean up any remaining snowflakes
      document.querySelectorAll('.christmas-snowflake').forEach(el => el.remove());
    };
  }, []);
  
  return null;
}
