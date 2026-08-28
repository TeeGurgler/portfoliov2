import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Hammer,
  Activity,
  Ship,
  Code2,
  BarChart3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/data/portfolio";

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "Tennis 3D Tracking & Analysis": <Activity className="h-5 w-5 text-white" />,
  "Container Route Tracking": <Ship className="h-5 w-5 text-white" />,
  "My Portfolio": <Code2 className="h-5 w-5 text-white" />,
  "Demographic Data Analysis": <BarChart3 className="h-5 w-5 text-white" />,
};

export function Services() {
  return (
    <section id="projects" className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs">
            <Hammer className="h-3.5 w-3.5 text-neutral-900" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Projects & Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            A selection of machine learning architectures, spatial computer
            vision algorithms, and full-stack software systems.
          </p>
        </motion.div>

        {/* Projects 2x2 Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-neutral-400 hover:bg-white/90 hover:shadow-xl hover:shadow-neutral-900/5 md:p-8">
                {/* Monochromatic gradient glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-neutral-900/[0.06] via-transparent to-neutral-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 shadow-md transition-transform duration-300 group-hover:scale-105">
                      {PROJECT_ICONS[project.title] || (
                        <FolderGit2 className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-black">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10">
                  {/* Tech stack tags */}
                  <div className="mb-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md border border-neutral-200/60 bg-neutral-100/80 px-2.5 py-0.5 text-[0.7rem] font-medium text-neutral-700 transition-colors group-hover:border-neutral-300 group-hover:bg-neutral-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Action link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-neutral-900 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-neutral-800 hover:shadow-md"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 text-center md:mt-20"
        ></motion.div>
      </div>
    </section>
  );
}
