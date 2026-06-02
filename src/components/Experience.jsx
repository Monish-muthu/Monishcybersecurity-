import { motion } from 'framer-motion';
import { FaBriefcase, FaBug, FaUsers, FaCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'Luxz Delight IT Company',
    period: '2024 — Present',
    description: 'Working on real-time projects focused on application security, bug identification, and vulnerability remediation.',
    points: [
      'Identified and resolved multiple critical bugs in production applications',
      'Collaborated with development teams to implement secure coding practices',
      'Improved website and application functionality through systematic testing',
      'Conducted security assessments and penetration testing on internal tools',
    ],
    icon: FaBriefcase,
  },
];

const extraActivities = [
  {
    icon: FaBug,
    title: 'Bug Hunting',
    desc: 'Actively finding vulnerabilities and reporting bugs through responsible disclosure programs.',
  },
  {
    icon: FaUsers,
    title: 'Team Collaboration',
    desc: 'Working closely with development teams to bridge security and functionality.',
  },
  {
    icon: FaCode,
    title: 'Secure Development',
    desc: 'Contributing to codebase improvements with security-first approach.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-1">
            {'>'} cat experience.log
          </p>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#00FF6620] md:-translate-x-1" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 md:w-1/2 md:pr-8"
            >
              <div className="absolute left-4 md:left-auto md:right-0 md:translate-x-1/2 top-6 w-3 h-3 rounded-full bg-[#00FF66] border-2 border-[#000] shadow-[0_0_10px_#00FF66] -translate-x-1/2" />

              <div className="glass-card p-6 ml-10 md:ml-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630]">
                    <exp.icon className="text-[#00FF66] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-[Orbitron] text-sm font-semibold text-[#00FF66]">
                      {exp.role}
                    </h3>
                    <p className="font-[Share_Tech_Mono] text-xs text-[#00CC44]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] border border-[#00FF6620] px-2 py-0.5 rounded">
                  {exp.period}
                </span>

                <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] mt-3 mb-3">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="font-[Share_Tech_Mono] text-xs text-[#00FF6680] flex items-start gap-2">
                      <span className="text-[#00FF66] mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {extraActivities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 text-center"
            >
              <item.icon className="text-[#00FF66] text-2xl mx-auto mb-2" />
              <h4 className="font-[Orbitron] text-xs font-semibold text-[#00FF66] mb-1">
                {item.title}
              </h4>
              <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6680]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;