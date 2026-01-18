import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  status: string;
  creator?: {
    headline: string;
    blurb: string;
  };
  companies: string[];
  onAskAI: () => void;
}

export default function HeroSection({
  name,
  title,
  bio,
  status,
  creator,
  companies,
  onAskAI,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 bg-gradient-to-b from-black to-zinc-950"
    >
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <span className="text-sm text-zinc-400">{status}</span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl font-bold text-white mb-4 text-center max-w-4xl display-font"
      >
        {name}
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-zinc-400 mb-4 text-center"
      >
        {title}
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base md:text-lg text-zinc-500 mb-8 text-center max-w-2xl"
      >
        {bio}
      </motion.p>

      {/* AI Content Creator Callout */}
      {creator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-3xl mb-10"
        >
          <div className="rounded-xl border border-teal-500/30 bg-zinc-900/60 px-6 py-5 text-left shadow-lg shadow-teal-500/10">
            <p className="text-xs uppercase tracking-widest text-teal-400">
              {creator.headline}
            </p>
            <p className="mt-2 text-sm md:text-base text-zinc-300">
              {creator.blurb}
            </p>
          </div>
        </motion.div>
      )}

      {/* Companies */}
      {companies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {companies.map((company) => (
            <span
              key={company}
              className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300"
            >
              {company}
            </span>
          ))}
        </motion.div>
      )}

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button
          onClick={onAskAI}
          className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg hover:shadow-teal-500/20"
        >
          Ask AI About Me
        </Button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest">
            Scroll to explore
          </span>
          <ChevronDown size={20} className="text-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
