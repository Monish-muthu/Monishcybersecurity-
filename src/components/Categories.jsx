import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGraduationCap,
  FaShieldAlt,
  FaBriefcase,
  FaChevronDown,
  FaCode,
  FaCertificate,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaTimes,
  FaFileAlt,
  FaMinus,
  FaExpand,
  FaSearchPlus,
  FaSearchMinus,
  FaPrint,
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaListOl,
  FaListUl,
} from 'react-icons/fa';
import Skills from './Skills';

const DocViewer = ({ isOpen, onClose, title, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] flex flex-col bg-[#f0f0f0]"
      >
        {/* Windows Title Bar */}
        <div className="flex items-center justify-between bg-[#2b5797] shrink-0 select-none">
          <div className="flex items-center gap-2 px-3 py-1.5">
            <div className="w-4 h-4 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="5" height="5" fill="#fff" />
                <rect x="7" y="3" width="5" height="5" fill="#fff" opacity="0.8" />
                <rect x="1" y="9" width="5" height="5" fill="#fff" opacity="0.8" />
                <rect x="7" y="9" width="5" height="5" fill="#fff" opacity="0.6" />
              </svg>
            </div>
            <span className="text-white text-[11px] font-normal" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
              {title} - Word
            </span>
          </div>
          <div className="flex items-center h-full">
            <button type="button" className="w-[46px] h-[30px] flex items-center justify-center bg-transparent hover:bg-[#ffffff20] text-white cursor-pointer border-none">
              <FaMinus className="text-[10px]" />
            </button>
            <button type="button" className="w-[46px] h-[30px] flex items-center justify-center bg-transparent hover:bg-[#ffffff20] text-white cursor-pointer border-none">
              <FaExpand className="text-[10px]" />
            </button>
            <button type="button" onClick={onClose} className="w-[46px] h-[30px] flex items-center justify-center bg-transparent hover:bg-[#e81123] text-white cursor-pointer border-none">
              <FaTimes className="text-[12px]" />
            </button>
          </div>
        </div>

        {/* Word Ribbon Tabs */}
        <div className="bg-[#2b5797] shrink-0 select-none">
          <div className="flex items-center gap-0 px-2 border-b border-[#1e3f70]">
            {['File', 'Home', 'Insert', 'Design', 'Layout', 'References', 'Review', 'View'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`px-3 py-1.5 text-white text-[11px] cursor-pointer border-none bg-transparent ${tab === 'Home' ? 'bg-[#1e3f70] font-semibold' : 'hover:bg-[#ffffff15]'}`}
                style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Ribbon Toolbar */}
          <div className="flex items-center gap-1 px-3 py-1 bg-[#f0f0f0] border-b border-[#d0d0d0]">
            <div className="flex items-center gap-1 pr-3 border-r border-[#d0d0d0]">
              <span className="text-[11px] font-semibold text-[#333] px-1" style={{ fontFamily: 'Calibri, sans-serif' }}>Calibri</span>
              <span className="text-[11px] text-[#333] px-1">11</span>
            </div>
            <div className="flex items-center gap-1 px-2 border-r border-[#d0d0d0]">
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaBold className="text-[10px] text-[#333]" /></button>
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaItalic className="text-[10px] text-[#333]" /></button>
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaUnderline className="text-[10px] text-[#333]" /></button>
            </div>
            <div className="flex items-center gap-1 px-2 border-r border-[#d0d0d0]">
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaAlignLeft className="text-[10px] text-[#333]" /></button>
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaAlignCenter className="text-[10px] text-[#333]" /></button>
            </div>
            <div className="flex items-center gap-1 px-2 border-r border-[#d0d0d0]">
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaListOl className="text-[10px] text-[#333]" /></button>
              <button type="button" className="w-7 h-7 flex items-center justify-center bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer"><FaListUl className="text-[10px] text-[#333]" /></button>
            </div>
            <div className="flex items-center gap-1 px-2">
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer text-[10px] text-[#333]"
                onClick={() => {
                  const page = document.getElementById('doc-page-content');
                  if (page) {
                    const current = parseFloat(page.style.fontSize) || 14;
                    page.style.fontSize = `${Math.min(current + 2, 24)}px`;
                  }
                }}
              >
                <FaSearchPlus className="text-[8px]" />
              </button>
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 bg-[#e0e0e0] hover:bg-[#d0d0d0] rounded border-none cursor-pointer text-[10px] text-[#333]"
                onClick={() => {
                  const page = document.getElementById('doc-page-content');
                  if (page) {
                    const current = parseFloat(page.style.fontSize) || 14;
                    page.style.fontSize = `${Math.max(current - 2, 10)}px`;
                  }
                }}
              >
                <FaSearchMinus className="text-[8px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Word Workspace - Gray Background with White Page */}
        <div className="flex-1 overflow-auto bg-[#e8e8e8] py-6 px-4" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="my-4 mx-auto" style={{ width: '100%', maxWidth: '210mm' }}>
            <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.1)]" style={{ minHeight: '297mm' }}>
              <div id="doc-page-content" className="px-16 py-16" style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a1a', fontFamily: 'Times New Roman, serif' }}>
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Word Status Bar */}
        <div className="flex items-center justify-between px-4 py-1 bg-[#2b5797] shrink-0 select-none">
          <span className="text-white text-[10px]" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
            Page 1 of 1
          </span>
          <div className="flex items-center gap-4">
            <span className="text-white text-[10px]" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
              100%
            </span>
            <span className="text-white text-[10px]" style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
              English (India)
            </span>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProjectDocCard = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        className="glass-card p-5 cursor-pointer group transition-all duration-300 hover:border-[#00FF6660]"
        onClick={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0 group-hover:border-[#00FF66] group-hover:bg-[#00FF6620] transition-all duration-300">
            <FaFileAlt className="text-[#00FF66] text-lg" />
          </div>
          <div className="flex-1">
            <h4 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">{title}</h4>
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-1">{subtitle}</p>
            <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] mt-2 flex items-center gap-1.5 group-hover:text-[#00FF66] transition-colors">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              Tap to open document
            </p>
          </div>
        </div>
      </div>
      <DocViewer isOpen={isOpen} onClose={close} title={title}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            A Study of Minors and Youngsters Involved in Motorcycle Theft
          </h1>
          <p style={{ fontSize: '0.9em', color: '#444', marginBottom: '0.25rem' }}>
            A Dissertation Submitted to the University of Madras
          </p>
          <p style={{ fontSize: '0.9em', color: '#444', marginBottom: '0.25rem' }}>
            In Partial Fulfilment of the Requirements for the Degree of
          </p>
          <p style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#333' }}>
            Bachelor of Arts in Criminology & Police Administration
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2rem', lineHeight: '2' }}>
          <p><strong>Submitted by:</strong> Monish M (112203044)</p>
          <p><strong>Under the Guidance of:</strong> Mr. Karthik R, Assistant Professor</p>
          <p style={{ fontWeight: 'bold' }}>Department of Criminology</p>
          <p>Agurchand Manmull Jain College</p>
          <p>Meenambakkam, Chennai — 600 061</p>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>Affiliated to the University of Madras</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1.5rem 0' }} />

        <h2 style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1rem' }}>
          Declaration
        </h2>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          I hereby declare that the dissertation entitled <em>"A Study of Minors and Youngsters Involved in Motorcycle Theft"</em> is a bonafide record of research work done by me under the supervision and guidance of Mr. Karthik R, Assistant Professor, Department of Criminology, Agurchand Manmull Jain College, Chennai. This dissertation has not previously formed the basis for the award of any degree, diploma, or similar title.
        </p>
        <p style={{ textAlign: 'right', marginTop: '2rem' }}>
          <strong>Monish M</strong><br />
          112203044
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1.5rem 0' }} />

        <h2 style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1rem' }}>
          Table of Contents
        </h2>
        <div style={{ paddingLeft: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>Chapter 1 — Introduction</p>
          <p style={{ marginBottom: '0.5rem' }}>Chapter 2 — Review of Literature</p>
          <p style={{ marginBottom: '0.5rem' }}>Chapter 3 — Methodology</p>
          <p style={{ marginBottom: '0.5rem' }}>Chapter 4 — Analysis and Findings</p>
          <p style={{ marginBottom: '0.5rem' }}>Chapter 5 — Conclusion and Recommendations</p>
          <p style={{ marginBottom: '0.5rem' }}>References</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1.5rem 0' }} />

        <h2 style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1rem' }}>
          Chapter 1 — Introduction
        </h2>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          Motorcycle theft involving minors and youngsters has emerged as a significant concern in urban and semi-urban areas across India. The ease of access to two-wheelers, combined with socio-economic factors, peer pressure, and the thrill-seeking behavior typical of adolescence, has contributed to a growing trend of juveniles engaging in vehicle theft, particularly motorcycles.
        </p>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          According to data from the National Crime Records Bureau (NCRB), motor vehicle theft constitutes one of the largest categories of property-related crimes, with motorcycles being the most commonly stolen vehicles. The involvement of minors in such criminal activities raises complex questions about juvenile justice, rehabilitation, and the socio-economic conditions that drive young individuals toward crime.
        </p>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          This study aims to examine the patterns, causes, and consequences of motorcycle theft involving minors and youngsters, while also evaluating the effectiveness of existing legal frameworks and rehabilitation programs under the Juvenile Justice (Care and Protection of Children) Act, 2015.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1.5rem 0' }} />

        <h2 style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1rem' }}>
          Chapter 5 — Conclusion & Recommendations
        </h2>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          The study reveals that motorcycle theft by minors is driven by a combination of socio-economic deprivation, peer influence, lack of educational opportunities, and the relatively low risk of detection. Strengthening community-based interventions, improving educational access, and enhancing the implementation of juvenile rehabilitation programs are critical steps toward addressing this issue.
        </p>
        <p style={{ textIndent: '2em', textAlign: 'justify', marginBottom: '1rem' }}>
          The findings underscore the need for a multi-pronged approach involving law enforcement, educational institutions, families, and community organizations to create an environment that discourages juvenile involvement in motorcycle theft and promotes positive alternatives for at-risk youth.
        </p>
      </DocViewer>
    </>
  );
};

const CertModal = ({ isOpen, onClose, src, alt }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-10 right-0 font-[Share_Tech_Mono] text-xs text-[#00FF6680] hover:text-[#00FF66] flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
          >
            <FaTimes className="text-[10px]" /> Tap to close
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[85vh] rounded-lg border border-[#00FF6630] object-contain"
            style={{ boxShadow: '0 0 30px #00FF6630, 0 0 60px #00FF6615' }}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ClickableCertCard = ({ title, subtitle, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        className="glass-card p-5 cursor-pointer group transition-all duration-300 hover:border-[#00FF6660]"
        onClick={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0 group-hover:border-[#00FF66] group-hover:bg-[#00FF6620] transition-all duration-300">
            <FaCertificate className="text-[#00FF66] text-lg" />
          </div>
          <div className="flex-1">
            <h4 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">{title}</h4>
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-1">{subtitle}</p>
            <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] mt-2 flex items-center gap-1.5 group-hover:text-[#00FF66] transition-colors">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              Tap to view certificate
            </p>
          </div>
        </div>
      </div>
      <CertModal isOpen={isOpen} onClose={close} src={imageSrc} alt={title} />
    </>
  );
};

const categories = [
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'Technical & Soft Skills',
    icon: FaCode,
    description: 'HTML, CSS, JS, Problem Solving, Networking, Linux, Nmap, Burp Suite & more',
  },
  {
    id: 'college',
    title: 'College',
    subtitle: 'UG Graduation & Academic Projects',
    icon: FaGraduationCap,
    description: 'BA Criminology, academic projects & certificates',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Penetration Testing & Security Projects',
    icon: FaShieldAlt,
    description: 'Penetration Tester certification, security tools & projects',
  },
  {
    id: 'internship',
    title: 'Internship',
    subtitle: 'Luxz Delight IT Company',
    icon: FaBriefcase,
    description: 'Real-time projects, bug fixing & team collaboration',
  },
];

const ProjectItem = ({ title, description, tech, link }) => (
  <div className="glass-card p-4 mb-4">
    <h5 className="font-[Orbitron] text-xs font-semibold text-[#00FF66] mb-2">{title}</h5>
    <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6680] mb-3 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-1.5 mb-2">
      {tech.map((t) => (
        <span
          key={t}
          className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6620] px-2.5 py-1 rounded"
        >
          {t}
        </span>
      ))}
    </div>
    {link && link !== '#' && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-[Share_Tech_Mono] text-[10px] text-[#00FF6680] hover:text-[#00FF66] transition-colors"
      >
        <FaExternalLinkAlt className="text-[8px]" /> View Project
      </a>
    )}
  </div>
);

const CertItem = ({ title, org, date }) => (
  <div className="glass-card p-4 mb-4 flex items-start gap-4">
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0">
      <FaCertificate className="text-[#00FF66] text-sm" />
    </div>
    <div>
      <h5 className="font-[Orbitron] text-xs font-semibold text-[#00FF66] mb-1">{title}</h5>
      <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6680]">{org}</p>
      {date && (
        <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">{date}</span>
      )}
    </div>
  </div>
);

const SectionHeading = ({ children }) => (
  <h3 className="font-[Orbitron] text-xs font-semibold text-[#00FF66] uppercase tracking-widest mb-5 mt-8 flex items-center gap-3">
    <span className="w-6 h-[1px] bg-[#00FF66]" style={{ boxShadow: '0 0 3px #00FF66' }} />
    {children}
  </h3>
);

const PageContent = ({ categoryId, onBack }) => {
  const contentMap = {
    skills: (
      <div className="mt-6">
        <Skills />
      </div>
    ),
    college: (
      <div className="mt-6 space-y-6">
        <SectionHeading>Education</SectionHeading>
        <div className="glass-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0">
              <FaGraduationCap className="text-[#00FF66] text-lg" />
            </div>
            <div>
              <h4 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">UG Graduation</h4>
              <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-1">BA Criminology & Police Administration</p>
              <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6660] mt-1">
                Agurchand Manmull Jain College, Meenambakkam, Chennai
              </p>
            </div>
          </div>
        </div>

        <SectionHeading>Project</SectionHeading>
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #050505 0%, #001a00 50%, #050505 100%)', border: '1px solid #00FF6640', boxShadow: '0 0 15px #00FF6620, inset 0 0 15px #00FF6608' }}>
          <div className="absolute inset-0 opacity-10" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF6605 2px, #00FF6605 4px)' }} />
          <div className="relative p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ background: '#00FF66', boxShadow: '0 0 6px #00FF66' }} />
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] uppercase tracking-[0.2em]">College Project</span>
              <div className="flex-1 h-[2px]" style={{ background: 'linear-gradient(90deg, #00FF6640, transparent)' }} />
            </div>

            <h3 className="font-[Orbitron] text-base md:text-lg font-bold text-[#00FF66] leading-tight mb-3" style={{ textShadow: '0 0 10px #00FF6660, 0 0 20px #00FF6630' }}>
              A Study of Minors and Youngsters Involved in Motorcycle Theft
            </h3>

            <p className="font-[Share_Tech_Mono] text-xs md:text-sm text-[#00FF6680] leading-relaxed mb-6">
              Dissertation submitted to the University of Madras in partial fulfilment of BA Criminology & Police Administration. Analyzed juvenile involvement in motorcycle theft, peer influence, socioeconomic factors, and legal frameworks under the Juvenile Justice Act, 2015.
            </p>

            <div className="flex items-center gap-3 text-[10px] text-[#00FF6660] mb-6">
              <span className="flex items-center gap-1.5"><FaGraduationCap className="text-[8px]" /> Criminology</span>
              <span className="w-1 h-1 rounded-full bg-[#00FF6630]" />
              <span>Legal Research</span>
              <span className="w-1 h-1 rounded-full bg-[#00FF6630]" />
              <span>Case Study</span>
              <span className="w-1 h-1 rounded-full bg-[#00FF6630]" />
              <span>NCRB Data</span>
            </div>

            <a
              href="https://drive.google.com/file/d/17YJKl4D0AsXD6oE5-5w3VvksyG16wKs7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-[Orbitron] text-xs md:text-sm font-semibold text-black bg-[#00FF66] hover:bg-[#33ff88] hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ boxShadow: '0 0 20px #00FF6640, 0 0 40px #00FF6620', textShadow: '0 0 2px rgba(0,0,0,0.3)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-7h6v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/></svg>
              VIEW FULL PROJECT PDF
            </a>

            <p className="font-[Share_Tech_Mono] text-[9px] text-[#00FF6640] mt-3 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              Opens in new tab
            </p>
          </div>
        </div>

        <SectionHeading>Certificates</SectionHeading>
        <ClickableCertCard
          title="Provisional Certificate - B.A"
          subtitle="Agurchand Manmull Jain College, Chennai"
          imageSrc="/images/provisional-certificate.jpg"
        />
      </div>
    ),
    cybersecurity: (
      <div className="mt-6 space-y-6">
        <SectionHeading>Certification</SectionHeading>
        <div className="glass-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0">
              <FaCertificate className="text-[#00FF66] text-lg" />
            </div>
            <div>
              <h4 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">
                Penetration Testing Certificate
              </h4>
              <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-1">
                Red Team Hacker Academy
              </p>
              <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6660] mt-1">
                // Add your certificate description here
              </p>
            </div>
          </div>
        </div>

        <SectionHeading>Cybersecurity Projects</SectionHeading>
        <div className="relative rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #050505 0%, #000d00 40%, #001a00 70%, #050505 100%)', border: '1px solid #00FF6640', boxShadow: '0 0 20px #00FF6625, 0 0 40px #00FF6610, inset 0 0 30px #00FF6608' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF66 2px, #00FF66 4px)' }} />
            <div className="absolute left-0 right-0 h-[2px] animate-pulse" style={{ top: '0%', background: 'linear-gradient(90deg, transparent, #00FF6650, transparent)', boxShadow: '0 0 10px #00FF6640', animation: 'scanLine 4s linear infinite' }} />
          </div>

          <div className="relative p-6 md:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-[#00FF66] text-lg" style={{ filter: 'drop-shadow(0 0 6px #00FF66)' }} />
                <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] uppercase tracking-[0.2em]">// CYBERSECURITY_PROJECT</span>
              </div>
              <span className="font-[Orbitron] text-[9px] font-bold tracking-[0.15em] text-black bg-[#00FF66] px-3 py-1 rounded" style={{ boxShadow: '0 0 10px #00FF6640' }}>
                COMPLETED
              </span>
            </div>

            <h3 className="font-[Orbitron] text-base md:text-lg font-bold text-[#00FF66] leading-tight mb-3" style={{ textShadow: '0 0 10px #00FF6660, 0 0 20px #00FF6630' }}>
              Penetration Testing & Vulnerability Assessment Report
            </h3>

            <p className="font-[Share_Tech_Mono] text-xs md:text-sm text-[#00FF6680] leading-relaxed mb-5">
              Comprehensive security assessment involving network reconnaissance, vulnerability scanning, exploitation, and post-exploitation analysis. Identified critical security flaws and documented remediation strategies for hardened system defense.
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> Nmap
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> Burp Suite
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> Kali Linux
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> Metasploit
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> Wireshark
              </span>
              <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6625] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66]" style={{ boxShadow: '0 0 4px #00FF66' }} /> OWASP
              </span>
            </div>

            <a
              href="https://drive.google.com/file/d/1VaXWHgLI31NH9hYtNrAsJnmEH6mErCtX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-[Orbitron] text-xs md:text-sm font-semibold text-black bg-[#00FF66] hover:bg-[#33ff88] hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ boxShadow: '0 0 20px #00FF6640, 0 0 40px #00FF6620' }}
            >
              <FaShieldAlt className="text-sm" />
              VIEW CYBERSECURITY PROJECT
            </a>

            <p className="font-[Share_Tech_Mono] text-[9px] text-[#00FF6640] mt-3 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" style={{ boxShadow: '0 0 4px #00FF66' }} />
              Opens in new tab &middot; PDF format
            </p>
          </div>
        </div>

        <SectionHeading>Professional Certificates</SectionHeading>
        <ClickableCertCard
          title="Penetration Testing Certificate"
          subtitle="Red Team Hacker Academy"
          imageSrc="/images/cybersecurity-certificate.jpg"
        />
      </div>
    ),
    internship: (
      <div className="mt-6 space-y-6">
        <SectionHeading>Position</SectionHeading>
        <div className="glass-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0">
              <FaBriefcase className="text-[#00FF66] text-lg" />
            </div>
            <div>
              <h4 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">
                Cybersecurity Intern
              </h4>
              <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-1">
                Luxz Delight IT Company
              </p>
              <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6660] mt-1">
                // Add your internship period here
              </p>
            </div>
          </div>
          <div className="mt-4 ml-14 space-y-2">
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] flex items-start gap-2">
              <span className="text-[#00FF66]">▸</span> Worked on real-time projects
            </p>
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] flex items-start gap-2">
              <span className="text-[#00FF66]">▸</span> Identified and solved multiple bugs
            </p>
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] flex items-start gap-2">
              <span className="text-[#00FF66]">▸</span> Collaborated with development teams
            </p>
            <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] flex items-start gap-2">
              <span className="text-[#00FF66]">▸</span> Improved website/application functionality
            </p>
          </div>
        </div>

        <SectionHeading>Internship Projects</SectionHeading>
        {/* ADD YOUR INTERNSHIP PROJECTS HERE */}
        <div className="glass-card p-5 border-2 border-dashed border-[#00FF6630]">
          <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6660] text-center">
            + Add your internship projects here
          </p>
        </div>
      </div>
    ),
  };

  const category = categories.find((c) => c.id === categoryId);

  return (
    <div>
      <div className="flex items-center gap-6 flex-wrap">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onBack();
          }}
          className="flex items-center gap-2 font-[Share_Tech_Mono] text-xs text-[#00FF6680] hover:text-[#00FF66] transition-colors bg-transparent border-none cursor-pointer px-3 py-1.5 rounded border-[1px] border-[#00FF6630] hover:border-[#00FF66] hover:bg-[#00FF6610]"
          aria-label="Back to Portfolio"
        >
          <FaArrowLeft className="text-[10px]" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630]" style={{ boxShadow: '0 0 8px #00FF6620' }}>
            <category.icon className="text-[#00FF66] text-sm" />
          </div>
          <div>
            <h2 className="font-[Orbitron] text-lg font-bold text-[#00FF66]" style={{ textShadow: '0 0 7px #00FF66, 0 0 10px #00FF6640' }}>
              {category.title}
            </h2>
            <p className="font-[Share_Tech_Mono] text-[11px] text-[#00FF6680]">{category.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="section-line mt-6 mb-10" />

      {contentMap[categoryId]}
    </div>
  );
};

const Categories = ({ activePage, setActivePage }) => {
  const handleBack = () => {
    setActivePage(null);
    setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCardClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePage) {
    return (
      <section id="categories" className="relative py-32">
        <div className="section-container">
          <PageContent categoryId={activePage} onBack={handleBack} />
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-2">
            {'>'} cat portfolio.sections
          </p>
          <h2 className="section-title mt-4">My Portfolio</h2>
          <div className="section-line" />
          <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6660] mb-10">
            // Click on any section to explore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: '0 0 20px #00FF6640, 0 0 40px #00FF6620',
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              onClick={() => handleCardClick(category.id)}
              className="glass-card p-4 cursor-pointer group transition-all duration-200 rounded-xl overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="flex flex-col items-center text-center w-full">
                {['college', 'skills', 'cybersecurity', 'internship'].includes(category.id) ? (
                  <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)' }}
                  >
                    <img
                      src={`/images/${{ college: 'college-logo', skills: 'skills-logo', cybersecurity: 'cybersecurity-logo', internship: 'internship-logo' }[category.id]}.png`}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85))' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="font-[Orbitron] text-base font-semibold text-[#00FF66]">
                        {category.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 text-[#00FF6680] group-hover:text-[#00FF66] transition-colors mt-1">
                        <span className="font-[Share_Tech_Mono] text-[10px]">Explore</span>
                        <FaChevronDown className="text-[8px] rotate-[-90deg]" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <motion.div
                      className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#00FF6610] border border-[#00FF6630] mb-5 group-hover:border-[#00FF66] group-hover:bg-[#00FF6620] transition-all duration-300"
                      whileHover={{
                        boxShadow: '0 0 20px #00FF66, 0 0 40px #00FF6630',
                      }}
                    >
                      <category.icon className="text-[#00FF66] text-3xl" />
                    </motion.div>
                    <h3 className="font-[Orbitron] text-base font-semibold text-[#00FF66]">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#00FF6680] group-hover:text-[#00FF66] transition-colors mt-3">
                      <span className="font-[Share_Tech_Mono] text-[10px]">Explore</span>
                      <FaChevronDown className="text-[8px] rotate-[-90deg]" />
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;