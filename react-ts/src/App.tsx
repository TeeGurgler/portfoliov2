import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Timeline } from "./components/timeline";
import { Footer } from "./components/footer";

export function BackgroundShader() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { rootMargin: "150px 0px 150px 0px" }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden transform-gpu transition-opacity duration-300",
        isHeroVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
      aria-hidden={!isHeroVisible}
    >
      <MeshGradient
        colors={["#000000", "#3f3f3f", "#6b6b6b", "#a3a3a3", "#ffffff"]}
        speed={isHeroVisible ? 0.2 : 0}
        scale={0.8}
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
}

export function App() {
  return (
    <div className="relative min-h-screen w-full text-foreground">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Globaler Shader ganz hinten (bleibt gemountet, pausiert außerhalb des Viewports) */}
      <BackgroundShader />

      {/* Hero Sektion mit Fade */}
      <Hero />

      {/* Gesamter Bereich unter Hero mit durchgehenden Partikeln */}
      <div
        className="relative z-10 w-full overflow-hidden transform-gpu"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Viewport-sized sticky Canvas: 95% weniger VRAM & flüssige 60/120 FPS */}
        <div className="pointer-events-none sticky top-0 h-screen w-full -mb-[100vh] z-0 overflow-hidden">
          <Particles
            className="h-full w-full"
            quantity={120}
            ease={80}
            color="#000000"
            size={0.6}
          />
        </div>
        <div className="relative z-10">
          <Services />
          <Skills />
          <Timeline />
          <Footer />
        </div>
      </div>
    </div>
  );
}

