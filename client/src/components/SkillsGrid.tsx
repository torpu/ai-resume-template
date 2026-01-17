import { motion } from "framer-motion";
import { Check, Circle, X } from "lucide-react";

interface SkillsGridProps {
  strong: string[];
  moderate: string[];
  gaps: string[];
}

export default function SkillsGrid({ strong, moderate, gaps }: SkillsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const SkillCard = ({
    title,
    skills,
    icon: Icon,
    color,
    bgColor,
  }: {
    title: string;
    skills: string[];
    icon: React.ComponentType<{ size: number }>;
    color: string;
    bgColor: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className={`p-6 rounded-lg border ${bgColor} ${color}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon size={20} />
        <h3 className="font-semibold uppercase text-sm tracking-wide">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm opacity-90">
            ✓ {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Fit</h2>
          <p className="text-zinc-400">
            An honest assessment of strengths, growth areas, and gaps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <SkillCard
            title="Strong"
            skills={strong}
            icon={Check}
            color="text-teal-400"
            bgColor="bg-teal-500/10 border-teal-500/30"
          />
          <SkillCard
            title="Moderate"
            skills={moderate}
            icon={Circle}
            color="text-zinc-400"
            bgColor="bg-zinc-800/50 border-zinc-700"
          />
          <SkillCard
            title="Gaps (I'll tell you)"
            skills={gaps}
            icon={X}
            color="text-amber-600"
            bgColor="bg-amber-500/10 border-amber-500/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
