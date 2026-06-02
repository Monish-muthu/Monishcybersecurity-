import MatrixRain from './components/MatrixRain';
import LoadingScreen from './components/LoadingScreen';
import CyberCursor from './components/CyberCursor';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <div className="relative">
      <LoadingScreen />
      <MatrixRain />
      <CyberCursor />
      <MouseGlow />
      <div className="scan-line-overlay" />

      <Navbar />

      <main className="md:pl-12">
        <div style={{ display: activePage ? 'none' : 'block' }}>
          <Hero />
          <div className="section-divider" />
        </div>

        <Categories activePage={activePage} setActivePage={setActivePage} />

        <div style={{ display: activePage ? 'none' : 'block' }}>
          <div className="section-divider" />
          <Contact />
        </div>
      </main>

      <div style={{ display: activePage ? 'none' : 'block' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;