import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MeshGradient } from "@paper-design/shaders-react";

import { Hero } from "./components/hero";
import { Hero2 } from "./components/hero2";
import { Services } from "./components/services";
import { Timeline } from "./components/timeline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Wichtig: KEIN bg-background hier auf dem Root-Div */}
    <div className="relative min-h-screen w-full text-foreground">
      {/*  Globaler Shader im Hintergrund */}
      <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
        <MeshGradient
          colors={["#000000", "#3f3f3f", "#6b6b6b", "#a3a3a3", "#ffffff"]}
          speed={0.2}
          scale={0.8}
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>

      {/* Sektionen */}
      <Hero />
      <Services />
      <Timeline />
      <Hero2 />
    </div>
  </StrictMode>,
);
