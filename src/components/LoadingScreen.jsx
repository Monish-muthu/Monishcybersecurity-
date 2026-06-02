import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: '> INITIALIZING SYSTEM...', delay: 0 },
  { text: '> Loading kernel modules...', delay: 400 },
  { text: '> Establishing encrypted connection...', delay: 800 },
  { text: '> Scanning network ports...', delay: 1200 },
  { text: '> Firewall: ACTIVE', delay: 1500 },
  { text: '> Intrusion detection: ENABLED', delay: 1800 },
  { text: '> Cybersecurity protocols: LOADED', delay: 2100 },
  { text: '> Identity: MONISH.M', delay: 2400 },
  { text: '> Status: SECURE', delay: 2700 },
];

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [showAccess, setShowAccess] = useState(false);

  useEffect(() => {
    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay)
    );

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 120);

    const accessTimer = setTimeout(() => {
      setShowAccess(true);
    }, 3000);

    const closeTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressTimer);
      clearTimeout(accessTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-xl px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1
                className="font-[Orbitron] text-3xl md:text-5xl font-bold mb-2"
                style={{
                  color: '#00FF66',
                  textShadow: '0 0 10px #00FF66, 0 0 20px #00FF66, 0 0 40px #00CC44, 0 0 80px #00FF6630',
                }}
              >
                MONISH.M
              </h1>
              <div
                className="w-16 h-[1px] mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, #00FF66, transparent)', boxShadow: '0 0 8px #00FF66' }}
              />
            </motion.div>

            <div className="bg-[#050505] border border-[#00FF6620] rounded-lg p-4 mb-6 font-[JetBrains_Mono] text-[10px] md:text-xs h-44 overflow-hidden"
              style={{ boxShadow: 'inset 0 0 20px rgba(0,255,102,0.03)' }}
            >
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#00FF66] mb-1.5"
                  style={{ textShadow: '0 0 5px rgba(0,255,102,0.5)' }}
                >
                  {line}
                </motion.div>
              ))}
              {!showAccess && (
                <span className="inline-block w-2 h-4 bg-[#00FF66] animate-pulse ml-1" style={{ boxShadow: '0 0 4px #00FF66' }} />
              )}
            </div>

            <div className="w-full h-[2px] bg-[#111] rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full"
                style={{ background: 'linear-gradient(90deg, #00FF66, #00CC44)', boxShadow: '0 0 10px #00FF66' }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
                {Math.min(Math.floor(progress), 100)}%
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
                ESTABLISHING SECURE CONNECTION
              </span>
            </div>

            <AnimatePresence>
              {showAccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-center"
                >
                  <div
                    className="inline-block px-8 py-3 rounded border border-[#00FF66]"
                    style={{
                      background: 'rgba(0,255,102,0.05)',
                      boxShadow: '0 0 20px rgba(0,255,102,0.2), inset 0 0 20px rgba(0,255,102,0.05)',
                    }}
                  >
                    <span
                      className="font-[Orbitron] text-sm md:text-base font-bold tracking-[0.3em]"
                      style={{
                        color: '#00FF66',
                        textShadow: '0 0 10px #00FF66, 0 0 20px #00FF66, 0 0 40px #00CC44',
                      }}
                    >
                      ACCESS GRANTED
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, #00FF6640, transparent)',
                boxShadow: '0 0 4px #00FF6620',
                animation: 'scan-line 4s linear infinite',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;