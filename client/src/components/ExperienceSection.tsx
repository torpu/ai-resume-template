import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  company: string;
  title: string;
  startYear: number;
  endYear: number | "Present";
  achievements: string[];
  aiContext: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4 bg-zinc-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-zinc-400">
            Each role includes queryable AI context—the real story behind the bullet points.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.startYear}`}
              company={exp.company}
              title={exp.title}
              startYear={exp.startYear}
              endYear={exp.endYear}
              achievements={exp.achievements}
              aiContext={exp.aiContext}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
