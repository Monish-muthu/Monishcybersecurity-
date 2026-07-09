import MatrixRain from './components/MatrixRain';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect, useCallback, useRef } from 'react';
import { trackVisitor } from './utils/trackVisitor';

const getInitialPage = () => {
  const hash = window.location.hash.slice(1);
  const validPages = ['skills', 'college', 'cybersecurity', 'internship', 'work'];
  if (hash && validPages.includes(hash)) {
    return hash;
  }
  return null;
};

const App = () => {
  const [activePage, setActivePage] = useState(getInitialPage);
  const isNavigating = useRef(false);

  useEffect(() => {
    trackVisitor();
  }, []);

  const navigateTo = useCallback((page) => {
    isNavigating.current = true;
    if (page) {
      history.pushState({ page }, '', `#${page}`);
    } else {
      history.pushState({ page: null }, '', window.location.pathname + window.location.search);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { isNavigating.current = false; }, 100);
  }, [isNavigating]);

  useEffect(() => {
    const handlePopState = (e) => {
      if (isNavigating.current) return;
      const page = e.state?.page ?? null;
      setActivePage(page);
      if (page) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isNavigating]);

  return (
    <div className="relative">
      <LoadingScreen />
      <MatrixRain />
      <div className="scan-line-overlay" />

      <Navbar activePage={activePage} setActivePage={navigateTo} />

      <main className="md:pl-12">
        <div style={{ display: activePage ? 'none' : 'block' }}>
          <Hero />
          <div className="section-divider" />
        </div>

        <Categories activePage={activePage} setActivePage={navigateTo} />

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