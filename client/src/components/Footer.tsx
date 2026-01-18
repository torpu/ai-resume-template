import { Github, Linkedin, Mail, Twitter, Twitch, Link } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  name: string;
  title: string;
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
    twitch?: string;
    kick?: string;
    suno?: string;
  };
}

export default function Footer({ name, title, social }: FooterProps) {
  const socialLinks = [
    {
      icon: Github,
      url: social?.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: social?.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      url: social?.email ? `mailto:${social.email}` : undefined,
      label: "Email",
    },
    {
      icon: Twitter,
      url: social?.twitter,
      label: "Twitter",
    },
    {
      icon: Twitch,
      url: social?.twitch,
      label: "Twitch",
    },
    {
      icon: Link,
      url: social?.kick,
      label: "Kick",
    },
    {
      icon: Link,
      url: social?.suno,
      label: "Suno",
    },
  ].filter((link) => link.url);

  return (
    <footer className="py-16 px-4 bg-black border-t border-zinc-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-sm text-zinc-400">{title}</p>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#14b8a6" }}
                    className="text-zinc-400 hover:text-teal-400 transition-colors"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          )}

          {/* Tagline */}
          <div className="space-y-2 text-xs text-zinc-500">
            <p>This portfolio demonstrates AI-queryable professional presentation.</p>
            <p>The interface is the proof.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
