import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MeshGradient } from "@paper-design/shaders-react";
import { Particles } from "@/components/ui/particles";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Timeline } from "./components/timeline";
import { Footer } from "./components/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative min-h-screen w-full text-foreground">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Globaler Shader ganz hinten */}
      <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
        <MeshGradient
          colors={["#000000", "#3f3f3f", "#6b6b6b", "#a3a3a3", "#ffffff"]}
          speed={0.2}
          scale={0.8}
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>

      {/* Hero Sektion mit Fade */}
      <Hero />

      {/* Gesamter Bereich unter Hero mit durchgehenden Partikeln */}
      <div
        className="relative z-10 w-full overflow-hidden"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Particles
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          quantity={160}
          ease={80}
          color="#000000"
          size={0.6}
        />
        <div className="relative z-10">
          <Services />
          <Skills />
          <Timeline />
          <Footer />
        </div>
      </div>
    </div>
  </StrictMode>,
);
