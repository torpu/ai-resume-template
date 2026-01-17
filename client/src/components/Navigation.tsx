import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  initials: string;
}

export default function Navigation({ onNavigate, initials }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "fit-check", label: "Fit Check" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => onNavigate("hero")}
          className="text-xl font-bold text-white hover:text-teal-400 transition-colors"
        >
          {initials}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => onNavigate("ask-ai")}
            className="bg-teal-500 hover:bg-teal-600 text-black font-semibold"
          >
            Ask AI
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-teal-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-zinc-800">
          <div className="container py-4 flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(section.id);
                  setIsOpen(false);
                }}
                className="text-left text-sm text-zinc-400 hover:text-white transition-colors py-2"
              >
                {section.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate("ask-ai");
                setIsOpen(false);
              }}
              className="bg-teal-500 hover:bg-teal-600 text-black font-semibold w-full"
            >
              Ask AI
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
