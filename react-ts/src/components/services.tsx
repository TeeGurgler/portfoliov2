"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  LineChart,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive single-page websites and web tools built with React and Tailwind CSS. Clean, fast, and structured for real business conversions.",
    features: [
      "React & Tailwind UI",
      "Mobile-First Responsive Design",
      "Conversion-Driven Layouts",
    ],
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Structured data backends using PostgreSQL and SQL. Organizing, connecting, and managing application data securely for business needs.",
    features: [
      "Relational Schema Design",
      "REST API Data Fetching",
      "PostgreSQL / Managed DBs",
    ],
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: LineChart,
    title: "Data Preparation & Insights",
    description:
      "Turning messy operational spreadsheets into clean, structured data models ready for business analysis and reporting.",
    features: [
      "Data Cleaning (Python/SQL)",
      "Automated Exports",
      "Process KPI Structuring",
    ],
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Connecting web forms, external APIs, and business tools to eliminate manual work and streamline incoming client inquiries.",
    features: [
      "Form Endpoints (Formspree)",
      "API Integrations",
      "Workflow Streamlining",
    ],
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

export function Services() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Practical Solutions for Growing Businesses</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Core Services
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Bridging technical development, database structuring, and commercial
            understanding to solve real business challenges.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div
                    className={`absolute inset-0 ${service.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div
                        className={`mb-4 w-fit rounded-xl ${service.bgColor} p-3`}
                      >
                        <Icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>

                      <h3 className="mb-2 text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2 border-t border-border/40 pt-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Action Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Need a reliable website or technical implementation for your
            business?
          </p>
          <Button size="lg" className="gap-2">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
