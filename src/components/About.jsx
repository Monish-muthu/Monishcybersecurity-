import { motion } from 'framer-motion';
import { FaShieldAlt, FaBug, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const aboutItems = [
  {
    icon: FaGraduationCap,
    title: 'BA Criminology Graduate',
    desc: 'Strong foundation in criminal behavior analysis, investigation methodologies, and security frameworks.',
  },
  {
    icon: FaShieldAlt,
    title: 'Penetration Testing Certified',
    desc: 'Red Team Hacker Academy certified penetration tester with hands-on offensive security experience.',
  },
  {
    icon: FaBug,
    title: 'Bug Hunter & Problem Solver',
    desc: 'Experienced in identifying vulnerabilities, bug hunting, and solving real-world technical issues.',
  },
  {
    icon: FaBriefcase,
    title: 'Intern @ Luxz Delight IT',
    desc: 'Currently working on real-time projects, collaborating with dev teams, and improving application security.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-1">
            {'>'} whoami
          </p>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="corner-bracket">
              <p className="font-[Share_Tech_Mono] text-sm text-[#00FF6680] mb-1">
                // profile.md
              </p>
              <p className="font-[JetBrains_Mono] text-sm leading-relaxed text-[#00FF66CC]">
                I'm <span className="text-[#00FF66] font-semibold">Monish M</span>, a passionate
                cybersecurity professional and ethical hacker. With a BA in Criminology and a
                Penetration Testing certification from{' '}
                <span className="text-[#00FF66]">Red Team Hacker Academy</span>, I bring a unique
                blend of analytical thinking and technical expertise.
              </p>
              <br />
              <p className="font-[JetBrains_Mono] text-sm leading-relaxed text-[#00FF66CC]">
                My journey spans from understanding criminal behavior to identifying digital
                vulnerabilities. Currently working as an intern at{' '}
                <span className="text-[#00FF66]">Luxz Delight IT Company</span>, I specialize in
                vulnerability assessment, penetration testing, and bug fixing that makes
                applications more secure.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {aboutItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 flex gap-4 items-start group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00FF6610] border border-[#00FF6630] shrink-0 group-hover:bg-[#00FF6620] transition-colors">
                  <item.icon className="text-[#00FF66] text-lg" />
                </div>
                <div>
                  <h3 className="font-[Orbitron] text-sm font-semibold text-[#00FF66] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-[Share_Tech_Mono] text-xs text-[#00FF6680]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;