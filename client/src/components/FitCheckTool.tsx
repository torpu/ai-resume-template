import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FitCheckToolProps {
  onAnalyze?: (jobDescription: string) => void;
}

export default function FitCheckTool({ onAnalyze }: FitCheckToolProps) {
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;

    setIsAnalyzing(true);

    // Simulate AI analysis delay
    setTimeout(() => {
      const mockAnalysis = `
Based on the job description provided, here's my honest assessment:

**Overall Fit: Strong (85%)**

This role aligns well with my background in platform infrastructure and technical leadership. The emphasis on API design and cross-functional initiatives matches my experience at Stripe and Datadog.

**Strengths:**
• Deep API design and versioning experience
• Proven ability to lead cross-functional teams
• Strong background in building scalable systems
• Experience with ambiguity and rapid iteration

**Potential Gaps:**
• Limited direct experience with fintech-specific compliance requirements
• No prior work with the specific payment rails mentioned

**Recommendation:**
This is a strong fit. I'd be excited to discuss how my platform architecture experience can accelerate your integration platform development.
      `.trim();

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);

      if (onAnalyze) {
        onAnalyze(jobDescription);
      }
    }, 1500);
  };

  const handleExample = (type: "strong" | "weak") => {
    if (type === "strong") {
      setJobDescription(
        "Senior Platform Engineer — Series B Fintech. We're looking for someone with deep API design experience, comfort with ambiguity, and the ability to lead cross-functional initiatives. You'll own our integration platform serving hundreds of partners..."
      );
    } else {
      setJobDescription(
        "Frontend React Developer — Consumer Mobile App. We're building a consumer-facing mobile app and need an expert in React Native and mobile UI/UX. Experience with growth metrics and A/B testing is essential. You'll work closely with our design and product teams..."
      );
    }
  };

  return (
    <section id="fit-check" className="py-20 px-4 bg-black">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Honest Fit Assessment
          </h2>
          <p className="text-zinc-400">
            Paste a job description. Get an honest assessment of whether I'm the right person—including when I'm not.
          </p>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center mb-8"
        >
          <Button
            onClick={() => handleExample("strong")}
            variant="outline"
            className="border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
          >
            Strong Fit Example
          </Button>
          <Button
            onClick={() => handleExample("weak")}
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
          >
            Weak Fit Example
          </Button>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="relative">
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Job description to analyze"
              className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:border-teal-500 focus:outline-none transition-colors resize-none h-32"
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!jobDescription.trim() || isAnalyzing}
            className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-6 disabled:opacity-50"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Fit"}
          </Button>
        </motion.div>

        {/* Analysis Output */}
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-4">
              Assessment
            </h3>
            <p className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">
              {analysis}
            </p>
          </motion.div>
        )}

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800"
        >
          <p className="text-sm text-zinc-400 italic">
            "This signals something completely different than 'please consider my resume.' You're qualifying them. Your time is valuable too."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
