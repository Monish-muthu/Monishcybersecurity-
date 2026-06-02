import { motion } from 'framer-motion';
import { FaCertificate, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const certifications = [
  {
    title: 'Penetration Testing Certificate',
    organization: 'Red Team Hacker Academy',
    description: 'Comprehensive training in offensive security, penetration testing methodologies, vulnerability assessment, and ethical hacking practices.',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web App Security', 'Reporting'],
    date: '2024',
    icon: FaShieldAlt,
  },
];

const additionalCerts = [
  { title: 'Ethical Hacking Fundamentals', org: 'Self-Study', icon: FaCertificate },
  { title: 'Web Application Security', org: 'Self-Study', icon: FaCertificate },
  { title: 'Linux Administration', org: 'Self-Study', icon: FaCertificate },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44] mb-1">
            {'>'} cat certifications.log
          </p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </motion.div>

        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00FF6610] to-transparent rounded-bl-full" />

            <div className="flex items-start gap-4 mb-4 relative z-10">
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#00FF6615] border border-[#00FF6640] shrink-0"
                animate={{ boxShadow: ['0 0 5px #00FF6640', '0 0 20px #00FF6640', '0 0 5px #00FF6640'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <cert.icon className="text-[#00FF66] text-2xl" />
              </motion.div>
              <div>
                <h3 className="font-[Orbitron] text-lg font-bold text-[#00FF66] mb-1">
                  {cert.title}
                </h3>
                <p className="font-[Share_Tech_Mono] text-sm text-[#00CC44]">
                  {cert.organization}
                </p>
                <span className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660] border border-[#00FF6620] px-2 py-0.5 rounded mt-1 inline-block">
                  {cert.date}
                </span>
              </div>
            </div>

            <p className="font-[Share_Tech_Mono] text-sm text-[#00FF6680] mb-4 relative z-10">
              {cert.description}
            </p>

            <div className="relative z-10">
              <p className="font-[Share_Tech_Mono] text-[10px] text-[#00CC44] mb-2 uppercase tracking-wider">
                Skills Covered:
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="flex items-center gap-1 font-[Share_Tech_Mono] text-[10px] text-[#00FF66] bg-[#00FF6610] border border-[#00FF6620] px-3 py-1 rounded-full"
                    whileHover={{
                      boxShadow: '0 0 10px rgba(0,255,102,0.3)',
                      borderColor: '#00FF66',
                    }}
                  >
                    <FaCheckCircle className="text-[8px]" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 font-[Orbitron] text-[6rem] font-black text-[#00FF6608] leading-none select-none pointer-events-none">
              CERT
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {additionalCerts.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <cert.icon className="text-[#00FF66] text-lg shrink-0" />
              <div>
                <h4 className="font-[Orbitron] text-[10px] font-semibold text-[#00FF66]">
                  {cert.title}
                </h4>
                <p className="font-[Share_Tech_Mono] text-[10px] text-[#00FF6660]">
                  {cert.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;