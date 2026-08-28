"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  CheckCircle,
  Hammer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TIMELINE_ITEMS } from "@/data/portfolio";

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="timeline" ref={ref} className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs">
            <Hammer className="h-3.5 w-3.5 text-primary" />
            <span>Academic & Professional Path</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Experience & Education
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            A unique profile bridging rigorous Data Science engineering with
            commercial economics and structured legal operations.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Animated Center / Left Line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-neutral-900 via-neutral-400 to-neutral-200 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon =
                item.type === "education" ? GraduationCap : Briefcase;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Node in center line */}
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-neutral-900 shadow-md"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute h-9 w-9 rounded-full bg-neutral-950/10"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Card content */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      isEven ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.015, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-neutral-400 hover:bg-white/90 hover:shadow-xl hover:shadow-neutral-900/5 md:p-7">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <Badge
                              variant="secondary"
                              className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-800"
                            >
                              {item.period}
                            </Badge>
                            <div className="flex items-center gap-1 text-[0.7rem] text-neutral-500">
                              <MapPin className="h-3 w-3 text-neutral-400" />
                              <span>{item.location}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold tracking-tight text-neutral-900 md:text-xl">
                              {item.title}
                            </h3>
                            <p className="text-xs font-semibold text-neutral-600">
                              {item.institution}
                            </p>
                          </div>

                          <p className="text-xs leading-relaxed text-neutral-600">
                            {item.description}
                          </p>

                          <ul className="space-y-1.5 border-t border-neutral-100 pt-3">
                            {item.highlights.map((highlight, hIndex) => (
                              <li
                                key={hIndex}
                                className="flex items-start gap-2 text-xs text-neutral-600"
                              >
                                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-900" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
