import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Hammer, Cpu, History, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects", icon: Hammer },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Timeline", href: "#timeline", icon: History },
  { label: "Contact", href: "#contact", icon: Mail },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar when scrolled past 120px, hide when at the top
    setVisible(latest > 120);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -60, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-black/10 dark:border-white/10 bg-background/80 px-3 py-1.5 backdrop-blur-md shadow-md"
        >
          {/* Home button on left side */}
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-full p-1.5 px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Home</span>
          </a>

          {/* Left separator line */}
          <div className="h-4 w-[1px] bg-border mx-1" />

          {/* Main navigation items */}
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right separator line */}
          <div className="h-4 w-[1px] bg-border mx-1" />

          {/* GitHub profile link */}
          <a
            href="https://github.com/TeeGurgler"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
