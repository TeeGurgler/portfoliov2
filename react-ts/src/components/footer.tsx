"use client";

import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

export function Footer() {
  return (
    <footer id="contact" className="w-full px-4 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl transform-gpu will-change-[transform,opacity]"
      >
        <Card className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-neutral-400 hover:bg-white/90 hover:shadow-xl hover:shadow-neutral-900/5 md:p-14 transform-gpu">
          {/* Subtle monochromatic top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-neutral-900/[0.04] via-transparent to-neutral-400/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 text-center">
            {/* Status Badge with green pulsating dot */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-100/90 px-4 py-1.5 text-xs font-medium text-neutral-800 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Projects & Data Science Roles</span>
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Let's build data-driven solutions together.
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
              Whether you need computer vision pipelines, full-stack
              architectures, automated data workflows, data analysis...
            </p>
            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
              Or you want to collaborate on an interesting project, feel free to
              reach out. I am always open to new opportunities and challenges.
              Let's connect!
            </p>

            {/* Action Buttons */}
            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-neutral-800 hover:shadow-lg"
                onClick={() => {
                  window.location.href = "mailto:jauch.andres@gmail.com";
                }}
              >
                <Mail className="h-4 w-4" />
                <span>Get in Touch</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-xl border border-neutral-200 bg-white/90 px-6 py-6 text-sm font-semibold text-neutral-800 shadow-2xs transition-all hover:border-neutral-900 hover:bg-neutral-50 hover:text-black"
                asChild
              >
                <a href="/cv.pdf" download="Andres_Jauch_CV.pdf">
                  <FileDown className="h-4 w-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </Button>

              <a
                href="https://github.com/TeeGurgler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white/90 text-neutral-700 shadow-2xs transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100 pt-8">
              <p className="text-xs text-neutral-500">
                Designed & Built with React, TypeScript & Tailwind CSS & Lots of
                ❤️
              </p>
              <p className="text-xs text-neutral-500">
                Based in Dornach, Switzerland. © {new Date().getFullYear()}{" "}
                Andrés Jauch
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </footer>
  );
}
