import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function CyberSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#00FF66"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        emissive="#003311"
        emissiveIntensity={0.5}
        wireframe
      />
    </Sphere>
  );
}

const aboutText = "I'm a BA Criminology graduate and certified Penetration Tester from Red Team Hacker Academy. Passionate about ethical hacking, vulnerability assessment, and bug fixing. Currently working as an intern at Luxz Delight IT Company, where I identify and solve real-world technical issues and collaborate with development teams to improve application security.";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ background: 'transparent' }}
            gl={{ alpha: true }}
          >
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00FF66" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00CC44" />
            <CyberSphere />
          </Canvas>
        </Suspense>
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* LEFT: Photo + Software Developer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center shrink-0"
          >
            <div className="relative mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/photo.png`}
                alt="Monish M"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-[#00FF66] object-cover"
                style={{ boxShadow: '0 0 20px #00FF66, 0 0 40px #00FF6640' }}
              />
              <div className="absolute inset-0 rounded-full border border-[#00FF6630] animate-pulse" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-[Orbitron] text-sm md:text-base font-semibold text-[#00FF66] tracking-widest"
              style={{ textShadow: '0 0 10px #00FF6680' }}
            >
              SOFTWARE DEVELOPER
            </motion.p>
          </motion.div>

          {/* RIGHT: Name, Typing, About, Buttons, Social */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-[Share_Tech_Mono] text-sm md:text-base text-[#00CC44] mb-2">
                {'>'} Welcome to my terminal_
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[Orbitron] text-4xl md:text-6xl lg:text-7xl font-bold mb-2 neon-text"
            >
              MONISH M
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-[Share_Tech_Mono] text-base md:text-lg text-[#00FF66] mb-4 h-[1.8rem]"
            >
              <span className="text-[#00CC44]">$</span>{' '}
              <TypeAnimation
                sequence={[
                  'UG Graduate',
                  2000,
                  'Ethical Hacker',
                  2000,
                  'Penetration Tester',
                  2000,
                  'Bug Finder',
                  2000,
                  'Cybersecurity Professional',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#00FF66]"
              />
              <span className="animate-pulse text-[#00FF66]">_</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glass-card p-7 mb-12"
            >
              <p className="font-[Share_Tech_Mono] text-xs text-[#00CC44] mb-4">
                {'>'} whoami
              </p>
              <p className="font-[JetBrains_Mono] text-sm leading-[1.9] text-[#00FF66CC]">
                {aboutText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-5 mb-12 justify-center md:justify-start"
            >
              <a href="#categories" className="neon-btn" onClick={(e) => { e.preventDefault(); document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Portfolio
              </a>
              <a href="#contact" className="neon-btn" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Contact Me
              </a>
              <a href={`${import.meta.env.BASE_URL}Monish_Resume.pdf`} className="neon-btn" download="Monish_Resume.pdf">
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-10 justify-center md:justify-start"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/Monish-muthu', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/monish-muthu/', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=monishseetha24@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  {...(!href.startsWith('mailto:') && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-[#00FF6680] hover:text-[#00FF66] transition-colors duration-300 text-3xl"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#00FF6640] flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#00FF66]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;