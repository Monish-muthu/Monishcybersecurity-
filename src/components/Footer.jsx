import { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const commands = [
    'system.status: SECURE',
    'firewall: ACTIVE',
    'threats.detected: 0',
    'connection: ENCRYPTED',
    'portfolio.version: 1.0.0',
  ];

  return (
    <footer className="relative border-t border-[#00FF6620] py-8">
      <div className="section-container">
        <div className="bg-[#050505] border border-[#00FF6620] rounded-lg p-4 font-[JetBrains_Mono] text-[10px] md:text-xs mb-6">
          <div className="flex items-center gap-2 mb-3 border-b border-[#00FF6620] pb-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
            <span className="text-[#00FF6680]">terminal@monish-portfolio:~$</span>
          </div>
          {commands.map((cmd, i) => (
            <div key={i} className="text-[#00FF6680] leading-relaxed">
              <span className="text-[#00CC44]">$</span> {cmd}
            </div>
          ))}
          <div className="text-[#00FF6680] mt-1">
            <span className="text-[#00CC44]">$</span> echo &quot;Built with dedication and code&quot;
          </div>
          <div className="text-[#00FF66] mt-0.5">
            Built with dedication and code
          </div>
          <div className="text-[#00FF6680] mt-1">
            <span className="text-[#00CC44]">$</span> _
            <span className="animate-pulse">█</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-[Orbitron] text-sm font-bold text-[#00FF66]" style={{ textShadow: '0 0 5px #00FF6680' }}>
              &lt;MM /&gt;
            </p>
            <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
              &copy; {new Date().getFullYear()} Monish M. All rights reserved.
            </p>
          </div>

          <div className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
            <span className="text-[#00FF6680]">SYS_TIME:</span> {time}
          </div>

          <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
            Designed & Developed with 💚 by Monish M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;