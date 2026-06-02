import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const categories = ['All', 'College', 'Cybersecurity', 'Internship', 'Workplace'];

const projects = [
  // ADD YOUR PROJECTS HERE - Follow this format:
  // {
  //   title: 'Project Name',
  //   description: 'Short description of what the project does.',
  //   tech: ['Technology1', 'Technology2', 'Technology3'],
  //   category: 'Cybersecurity',    // Must be one of: 'College', 'Cybersecurity', 'Internship', 'Workplace'
  //   problem: 'What problem this project solves.',
  //   github: 'https://github.com/yourname/project',  // Your GitHub repo link
  //   demo: 'https://yourproject.com',                 // Live demo link (or '#' if none)
  // },
  //
  // Example:
  // {
  //   title: 'Network Vulnerability Scanner',
  //   description: 'Automated tool to scan local networks for open ports and vulnerabilities.',
  //   tech: ['Python', 'Nmap', 'Bash'],
  //   category: 'Cybersecurity',
  //   problem: 'Manual network auditing was time-consuming.',
  //   github: 'https://github.com/monishm/vuln-scanner',
  //   demo: '#',
  // },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      ref={cardRef}
      className="glass-card p-6 group transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] uppercase tracking-wider border border-[#00FF6630] px-2 py-0.5 rounded">
          {project.category}
        </span>
      </div>

      <h3 className="font-[Orbitron] text-base font-semibold text-[#00FF66] mb-2 group-hover:neon-text-subtle transition-all">
        {project.title}
      </h3>

      <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-3">
        <p className="font-[Share_Tech_Mono] text-[10px] text-[#00CC44] mb-1">
          Problem Solved:
        </p>
        <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
          {project.problem}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6620] px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-[Share_Tech_Mono] text-[10px] text-[#00FF6680] hover:text-[#00FF66] transition-colors uppercase tracking-wider"
        >
          <FaGithub /> GitHub
        </a>
        {project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-[Share_Tech_Mono] text-[10px] text-[#00FF6680] hover:text-[#00FF66] transition-colors uppercase tracking-wider"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-1">
            {'>'} ls ./projects/
          </p>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-[Share_Tech_Mono] text-xs px-4 py-2 rounded border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00FF6615] border-[#00FF66] text-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.2)]'
                  : 'bg-transparent border-[#00FF6630] text-[#00FF6680] hover:border-[#00FF6660] hover:text-[#00FF66]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;