import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState, useEffect } from 'react';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import Jasonhug from './sections/Jasonhug';
import Jason from './sections/Jason';
import Luciahug from './sections/Luciahug';

function App() {
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowHero(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#18181b',
      }}>
        <img
          src="/images/rockstar.gif"
          alt="Rockstar Loading"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <>
    <NavBar />
    <Hero show={showHero} />
    <Jasonhug />
    <Jason />
    <Luciahug />
    </>
  )
}

export default App
