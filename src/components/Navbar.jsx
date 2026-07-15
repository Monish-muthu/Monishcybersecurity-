import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'categories', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleBack = () => {
    setActivePage(null);
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Desktop: Left side vertical nav */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-[1000] flex-col items-center gap-3 px-3 py-4 rounded-r-xl transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-r border-t border-b border-[#00FF6620]'
            : 'bg-transparent'
        }`}
      >
        <span className="font-[Orbitron] text-[10px] font-bold text-[#00FF66] mb-2 tracking-wider" style={{ textShadow: '0 0 5px #00FF6680' }}>
          M.M
        </span>

        <div className="w-5 h-[1px] bg-[#00FF6640] mb-1" />

        {navLinks.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.id);
            }}
            className={`font-[Share_Tech_Mono] text-[10px] no-underline transition-all duration-300 writing-vertical ${
              activeSection === link.id
                ? 'text-[#00FF66]'
                : 'text-[#00FF6660] hover:text-[#00FF66]'
            }`}
            whileHover={{ x: 4 }}
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {link.label}
          </motion.a>
        ))}

        <div className="w-5 h-[1px] bg-[#00FF6640] mt-1" />

        <button
          onClick={() => scrollTo('home')}
          className="mt-1 w-2 h-2 rounded-full bg-[#00FF66] border-none cursor-pointer"
          style={{ boxShadow: '0 0 5px #00FF66' }}
          aria-label="Home"
        />
      </motion.nav>

      {/* Mobile: Top bar with hamburger + back button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[1001] flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-black/80 backdrop-blur-md border-b border-[#00FF6620]">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="text-[#00FF66] text-xl bg-transparent border-none cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <AnimatePresence>
            {activePage && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                onClick={handleBack}
                className="flex items-center gap-1.5 font-[Share_Tech_Mono] text-xs text-[#00FF6680] hover:text-[#00FF66] transition-colors bg-transparent border border-[#00FF6630] rounded px-2.5 py-1.5 cursor-pointer min-h-[44px]"
                aria-label="Back to Portfolio"
              >
                <FaArrowLeft className="text-[10px]" />
                <span>Back</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <span className="font-[Orbitron] text-[10px] font-bold text-[#00FF66] tracking-wider" style={{ textShadow: '0 0 5px #00FF6680' }}>
          M.M
        </span>
      </div>

      {/* Mobile: Full screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="md:hidden fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 pt-16"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className={`font-[Share_Tech_Mono] text-lg sm:text-xl no-underline min-h-[44px] flex items-center px-6 ${
                  activeSection === link.id
                    ? 'text-[#00FF66]'
                    : 'text-[#00FF6680]'
                }`}
              >
                {'>'} {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
