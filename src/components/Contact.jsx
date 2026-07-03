import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/monish-muthu',
    href: 'https://www.linkedin.com/in/monish-muthu/',
    terminal: 'curl -X CONNECT linkedin.com/in/monish-muthu',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'Monish-muthu',
    href: 'https://github.com/Monish-muthu',
    terminal: 'git clone https://github.com/Monish-muthu',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'monishseetha24@gmail.com',
    href: 'mailto:monishseetha24@gmail.com',
    terminal: 'echo "message" | sendmail monishseetha24@gmail.com',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-1">
            {'>'} establish_connection --secure
          </p>
          <h2 className="section-title">CONTACT ME</h2>
          <div className="section-line" />
          <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6660] mt-2 mb-10">
            // select a channel to connect
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href={link.href}
                {...(!link.href.startsWith('mailto:') && { target: "_blank", rel: "noopener noreferrer" })}
                className="block relative rounded-xl overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #050505 0%, #000d00 50%, #050505 100%)',
                  border: '1px solid #00FF6640',
                  boxShadow: '0 0 15px #00FF6615, inset 0 0 15px #00FF6605',
                }}
              >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF66 2px, #00FF66 4px)' }} />
                <div
                  className="absolute left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00FF6650, transparent)',
                    boxShadow: '0 0 8px #00FF6640',
                    animation: `scanLine 3s linear infinite`,
                    animationDelay: `${index * 1.2}s`,
                    top: '0%',
                  }}
                />
              </div>

              <div className="relative flex items-center gap-5 p-6 sm:p-8">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #00FF6615, #00FF6608)',
                    border: '1px solid #00FF6640',
                    boxShadow: '0 0 12px #00FF6620',
                  }}
                >
                  <link.icon className="text-[#00FF66] text-xl sm:text-2xl" style={{ filter: 'drop-shadow(0 0 4px #00FF66)' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-[Orbitron] text-sm sm:text-base font-bold text-[#00FF66]" style={{ textShadow: '0 0 8px #00FF6660' }}>
                      {link.label}
                    </span>
                    <span className="font-[Orbitron] text-[8px] font-bold tracking-[0.15em] text-black bg-[#00FF66] px-2 py-0.5 rounded hidden sm:inline-block" style={{ boxShadow: '0 0 8px #00FF6640' }}>
                      ACTIVE
                    </span>
                  </div>
                  <p className="font-[Share_Tech_Mono] text-xs sm:text-sm text-[#00FF6680] truncate">
                    {link.value}
                  </p>
                  <p className="font-[Share_Tech_Mono] text-[9px] text-[#00FF6640] mt-1 hidden sm:block">
                    {link.terminal}
                  </p>
                </div>

                <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border border-[#00FF6630] group-hover:border-[#00FF66] group-hover:bg-[#00FF6610] transition-all duration-300">
                  <svg className="w-4 h-4 text-[#00FF6680] group-hover:text-[#00FF66] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #00FF6660, transparent)', opacity: 0, transition: 'opacity 0.3s' }} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8"
        >
          <div className="glass-card p-5 sm:p-6">
            <p className="font-[Share_Tech_Mono] text-xs text-[#00CC44] mb-3">
              // terminal.output
            </p>
            <div className="bg-[#050505] border border-[#00FF6620] rounded-lg p-4 font-[JetBrains_Mono] text-xs">
              <p className="text-[#00FF6680]">
                <span className="text-[#00CC44]">$</span> echo &quot;Let&apos;s build something secure together&quot;
              </p>
              <p className="text-[#00FF66] mt-1">
                Let&apos;s build something secure together
              </p>
              <p className="text-[#00FF6680] mt-1">
                <span className="text-[#00CC44]">$</span> _
                <span className="animate-pulse">█</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;