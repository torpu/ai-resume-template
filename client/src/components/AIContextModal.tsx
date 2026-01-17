import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface AIContextModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: string;
  title: string;
  context: string;
}

export default function AIContextModal({
  isOpen,
  onClose,
  company,
  title,
  context,
}: AIContextModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold mb-2">
                {company}
              </DialogTitle>
              <p className="text-sm text-zinc-400">{title}</p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </DialogHeader>

        {/* Context Content */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
            <h3 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wide">
              AI Context
            </h3>
            <p className="text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap">
              {context}
            </p>
          </div>

          {/* Insight Box */}
          <div className="p-4 rounded-lg bg-teal-500/10 border border-teal-500/20">
            <p className="text-xs font-semibold text-teal-400 mb-2 uppercase tracking-wide">
              Key Insight
            </p>
            <p className="text-sm text-teal-200">
              This role demonstrates deep expertise in the domain and significant impact on the organization's technical direction.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
