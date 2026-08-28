import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { KineticText } from "@/components/ui/kinetic-text";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="transform-gpu will-change-[transform,opacity]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block transform-gpu will-change-transform"
          >
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-black/10 bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-500 p-0.5 shadow-xl shadow-neutral-950/15">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 text-xl font-bold tracking-wider text-white">
                AJ
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
        animate={{ opacity: 1, y: [0, 10, 0] }}
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
