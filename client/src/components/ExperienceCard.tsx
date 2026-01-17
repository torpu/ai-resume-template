import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import AIContextModal from "./AIContextModal";

interface ExperienceCardProps {
  company: string;
  title: string;
  startYear: number;
  endYear: number | "Present";
  achievements: string[];
  aiContext: string;
  index: number;
}

export default function ExperienceCard({
  company,
  title,
  startYear,
  endYear,
  achievements,
  aiContext,
  index,
}: ExperienceCardProps) {
  const [showModal, setShowModal] = useState(false);

  const dateRange = `${startYear}–${endYear}`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-black/20">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {company}
              </h3>
              <p className="text-sm text-zinc-400">{title}</p>
            </div>
            <span className="text-xs text-zinc-500 whitespace-nowrap ml-4">
              {dateRange}
            </span>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mb-6">
            {achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-zinc-400"
              >
                <span className="text-teal-400 mt-1 flex-shrink-0">→</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            onClick={() => setShowModal(true)}
            variant="outline"
            className="w-full border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50 transition-all"
          >
            View AI Context
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </motion.div>

      {/* Modal */}
      <AIContextModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        company={company}
        title={title}
        context={aiContext}
      />
    </>
  );
}
