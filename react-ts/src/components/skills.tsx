import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Layout, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Data Science & Vision": <BrainCircuit className="h-4 w-4 text-white" />,
  "Web & Architecture": <Layout className="h-4 w-4 text-white" />,
  "Tools & Infrastructure": <Boxes className="h-4 w-4 text-white" />,
};

const SKILL_ICONS: Record<string, React.ReactNode> = {
  Python: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.91 0c-1.89 0-3.57.17-4.8.48-3.66.92-3.87 2.85-3.87 6.4v2.33h7.82v1.11H3.24C1.45 10.32 0 11.83 0 14.33c0 2.5 1.25 4.31 3.63 4.88 1.48.36 3.12.44 5.09.44h1.72v-2.45c0-1.74 1.46-3.19 3.25-3.19h4.94c1.45 0 2.63-1.22 2.63-2.69V6.4c0-3.32-.87-4.99-3.87-5.92C15.9.06 13.8 0 11.91 0zm-2.48 2.05c.67 0 1.22.56 1.22 1.25 0 .69-.55 1.25-1.22 1.25s-1.22-.56-1.22-1.25c0-.69.55-1.25 1.22-1.25zM12.09 24c1.89 0 3.57-.17 4.8-.48 3.66-.92 3.87-2.85 3.87-6.4v-2.33h-7.82v-1.11h7.82c1.79 0 3.24-1.51 3.24-4.01 0-2.5-1.25-4.31-3.63-4.88-1.48-.36-3.12-.44-5.09-.44h-1.72v2.45c0 1.74-1.46 3.19-3.25 3.19H5.42c-1.45 0-2.63 1.22-2.63 2.69v4.92c0 3.32.87 4.99 3.87 5.92 1.49.42 3.59.48 5.43.48zm2.48-2.05c-.67 0-1.22-.56-1.22-1.25 0-.69.55-1.25 1.22-1.25s1.22.56 1.22 1.25c0 .69-.55 1.25-1.22 1.25z" />
    </svg>
  ),
  R: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.875 4.5h4.125c2.9 0 4.875 1.4 4.875 3.65 0 1.9-1.325 3.225-3.325 3.575l3.75 6.275h-3.15l-3.325-5.8h-1.45v5.8h-2.5V4.5h2.5zm0 2.25v3.45h3.65c1.45 0 2.375-.725 2.375-1.725 0-1-.925-1.725-2.375-1.725H10.125z" />
    </svg>
  ),
  Pandas: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm4 0h-2v-4h2v4zm-2-8H9V7h4v2z" />
    </svg>
  ),
  NumPy: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.3l8.25 4.71v9.42L12 21.14 3.75 16.43V7.01L12 2.3zM9 8h2v8H9V8zm4 0h2v8h-2V8z" />
    </svg>
  ),
  Streamlit: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 21h22L12 2zm0 4.2l7.1 12.8H4.9L12 6.2zM12 10l-3 5.4h6L12 10z" />
    </svg>
  ),
  "SQL & PostgreSQL": (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  React: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  ),
  TypeScript: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <rect
        width="24"
        height="24"
        rx="4"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <text
        x="12"
        y="16.5"
        fontSize="12"
        fontWeight="800"
        fontFamily="sans-serif"
        textAnchor="middle"
        fill="currentColor"
      >
        TS
      </text>
    </svg>
  ),
  JavaScript: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <rect
        width="24"
        height="24"
        rx="4"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <text
        x="12"
        y="16.5"
        fontSize="12"
        fontWeight="800"
        fontFamily="sans-serif"
        textAnchor="middle"
        fill="currentColor"
      >
        JS
      </text>
    </svg>
  ),
  FastAPI: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.09 4.67l-.42 6.55h4.15L10.91 19.33l.42-6.55H7.18l5.91-8.11z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  Docker: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.99 11.4c-.45-.72-1.39-.99-2.31-.83-.17-.79-.69-1.42-1.42-1.74l-.49-.21-.31.43c-.49.69-.74 1.49-.74 2.33 0 .28.03.56.09.83-.4.22-.89.34-1.45.34H.88c-.49 0-.88.39-.88.88 0 4.67 3.39 8.65 8.16 9.49 1.05.18 2.14.28 3.25.28 4.29 0 8.04-2.22 10.37-5.63.15-.22.28-.45.4-.69.96-.34 1.74-1.02 2.05-1.95.27-.81.12-1.75-.24-2.42" />
    </svg>
  ),
  "Git & GitHub": (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Vite: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.6 3.6L12.8 23.4c-.3.6-1.2.6-1.5 0L.4 3.6c-.4-.7.1-1.6.9-1.6h21.4c.8 0 1.3.9.9 1.6zm-11.6 3.1l-3.3 6.1h3.3v4.6l3.3-6.1h-3.3V6.7z" />
    </svg>
  ),
  Jupyter: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="6" cy="7" r="1.5" fill="currentColor" />
      <circle cx="18" cy="17" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Linux / Bash": (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

export function Skills() {
  return (
    <section id="skills" className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs">
            <Cpu className="h-3.5 w-3.5 text-neutral-900" />
            <span>Technical Stack & Methodologies</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Versatile toolkit spanning applied data science, modern frontend &
            backend architectures, and production infrastructure.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: catIndex * 0.12,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className="transform-gpu will-change-[transform,opacity]"
            >
              <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-neutral-400 hover:bg-white/90 hover:shadow-lg hover:shadow-neutral-900/5 md:p-7 transform-gpu">
                {/* Monochromatic top border accent on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-neutral-900/[0.04] via-transparent to-neutral-400/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 shadow-xs">
                      {CATEGORY_ICONS[category.category] || (
                        <Cpu className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                      {category.category}
                    </h3>
                  </div>

                  <p className="mb-6 text-xs leading-relaxed text-neutral-600">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2.5 rounded-xl border border-neutral-200/70 bg-neutral-50/90 p-2.5 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white hover:shadow-md"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200/60 bg-white p-1 text-neutral-800 shadow-2xs transition-colors duration-200 group-hover/skill:border-neutral-700 group-hover/skill:bg-neutral-800 group-hover/skill:text-white">
                          {SKILL_ICONS[skill.name] || (
                            <Cpu className="h-4 w-4" />
                          )}
                        </div>
                        <span className="truncate text-xs font-semibold text-neutral-800 transition-colors group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
