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
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 pb-10 px-4 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-500/20 to-fuchsia-500/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-60px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-teal-500/20 via-sky-500/15 to-violet-500/20 blur-3xl"></div>
        <div className="absolute top-24 left-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl"></div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-cyan-400/20 shadow-[0_0_16px_rgba(34,211,238,0.2)]">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            <span className="text-sm text-zinc-300">{status}</span>
          </div>
        </motion.div>

      {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold mb-4 text-center max-w-4xl display-font tracking-tight ai-gradient-text ai-glow"
        >
          {name}
        </motion.h1>

      {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-4 text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-cyan-200 to-fuchsia-200"
        >
          {title}
        </motion.p>

      {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-zinc-400 mb-8 text-center max-w-2xl"
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
            <div className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/30 px-6 py-5 text-left shadow-[0_0_24px_rgba(34,211,238,0.18)]">
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                {creator.headline}
              </p>
              <p className="mt-2 text-sm md:text-base text-zinc-200">
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
                className="px-3 py-1 rounded-full bg-zinc-900/80 border border-cyan-400/20 text-sm text-zinc-200"
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
            className="bg-gradient-to-r from-cyan-400 via-teal-400 to-fuchsia-500 text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.45)]"
          >
            Ask AI About Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
