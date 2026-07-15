import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNetworkWired,
  FaLinux,
  FaTools,
  FaPuzzlePiece,
  FaLightbulb,
  FaBrain,
  FaUsers,
  FaComments,
} from 'react-icons/fa';

const technicalSkills = [
  { name: 'HTML', icon: FaHtml5, level: 85 },
  { name: 'CSS', icon: FaCss3Alt, level: 80 },
  { name: 'JavaScript', icon: FaJs, level: 70 },
  { name: 'Networking', icon: FaNetworkWired, level: 75 },
  { name: 'Linux', icon: FaLinux, level: 72 },
  { name: 'Tools Handling', icon: FaTools, level: 80 },
];

const softSkills = [
  { name: 'Problem Solving', icon: FaPuzzlePiece, level: 90 },
  { name: 'Creative Thinking', icon: FaLightbulb, level: 85 },
  { name: 'Logical Thinking', icon: FaBrain, level: 88 },
  { name: 'Team Collaboration', icon: FaUsers, level: 85 },
  { name: 'Communication', icon: FaComments, level: 80 },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-card p-4 sm:p-5 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF6608] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#00FF6615] border border-[#00FF6630] group-hover:border-[#00FF66] group-hover:shadow-[0_0_10px_#00FF6640] transition-all">
          <skill.icon className="text-[#00FF66] text-base sm:text-lg" />
        </div>
        <span className="font-[Orbitron] text-[11px] sm:text-sm font-semibold text-[#00FF66] uppercase tracking-wider">
          {skill.name}
        </span>
      </div>

      <div className="relative z-10">
        <div className="w-full h-[3px] sm:h-[4px] bg-[#0a0a0a] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00CC44, #00FF66)',
              boxShadow: '0 0 10px #00FF66',
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.08 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="pb-10 sm:pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-0">
        {/* Technical Skills - Left */}
        <div>
          <div className="mb-16 sm:mb-20 md:mb-24 pt-6 sm:pt-8 md:pt-10">
            <div className="w-full h-[1px] bg-[#00FF6620] mb-6 sm:mb-8 md:mb-10" />
            <h3 className="font-[Orbitron] text-xs sm:text-sm font-bold text-[#00FF66] uppercase tracking-widest mb-6 sm:mb-8 md:mb-10 flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 md:w-10 h-[1px] bg-[#00FF66]" style={{ boxShadow: '0 0 5px #00FF66' }} />
              Technical Skills
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills - Right */}
        <div>
          <div className="mb-16 sm:mb-20 md:mb-24 pt-6 sm:pt-8 md:pt-10">
            <div className="w-full h-[1px] bg-[#00FF6620] mb-6 sm:mb-8 md:mb-10" />
            <h3 className="font-[Orbitron] text-xs sm:text-sm font-bold text-[#00FF66] uppercase tracking-widest mb-6 sm:mb-8 md:mb-10 flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 md:w-10 h-[1px] bg-[#00FF66]" style={{ boxShadow: '0 0 5px #00FF66' }} />
              Soft Skills
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;