import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { KineticText } from "@/components/ui/kinetic-text";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { margin: "100px" });

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden transform-gpu"
    >
      {/* 
        Smooth vertical gradient transition into the app background
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.85) 75%, #ffffff 100%)",
        }}
      />

      {/* Hero content container staying above fade overlay */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Radial soft-light spot to guarantee typography contrast against dark shader blobs */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-85 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 45%, rgba(255, 255, 255, 0) 75%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="transform-gpu will-change-[transform,opacity]"
        >
          {/* Avatar with Interactive Hover Ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="group mb-6 inline-block transform-gpu will-change-transform cursor-default"
          >
            <div className="relative mx-auto flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-full p-1 bg-gradient-to-b from-neutral-900 via-neutral-600 to-neutral-300 shadow-xl shadow-neutral-950/20 ring-1 ring-black/10 transition-all duration-450 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-neutral-950/30 group-hover:ring-4 group-hover:ring-neutral-900/15 group-hover:ring-offset-2 group-hover:ring-offset-white">
              <div className="h-full w-full overflow-hidden rounded-full bg-neutral-900">
                <img
                  src="/portrait.png"
                  alt="Andrés Jauch"
                  width={160}
                  height={160}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full rounded-full object-cover object-[center_20%] filter grayscale contrast-[1.08] brightness-[0.98] transition-all duration-450 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 cursor-default"
                />
              </div>
            </div>
          </motion.div>

          <KineticText
            text="Andrés Jauch"
            as="h1"
            className="mb-6 justify-center text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl transform-gpu will-change-[transform,opacity]"
          >
            I focus on database architectures, modern web development, data
            analysis, and process automation. Delivering scalable,
            high-performance solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4 transform-gpu will-change-[transform,opacity]"
          >
            <Button
              size="lg"
              className="gap-2"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() =>
                window.open("https://github.com/TeeGurgler", "_blank")
              }
            >
              GitHub Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? { opacity: 1, y: [0, 10, 0] }
            : { opacity: 0, y: 0 }
        }
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform-gpu will-change-[transform,opacity] text-sm text-muted-foreground z-10"
      >
        ↓
      </motion.div>
    </section>
  );
}

