"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const hexInt = parseInt(cleanHex, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

function remapValue(
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  const remapped =
    ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  return remapped > 0 ? remapped : 0;
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
  const rafID = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(false);
  const rgbPrefixRef = useRef<string>(hexToRgb(color).join(", "));

  useEffect(() => {
    rgbPrefixRef.current = hexToRgb(color).join(", ");
  }, [color]);

  const containerRectRef = useRef<{ left: number; top: number; width: number; height: number }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const updateRect = () => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      containerRectRef.current = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }
  };

  useEffect(() => {
    const initCircle = (circle: Circle, w: number, h: number): void => {
      circle.x = Math.floor(Math.random() * w);
      circle.y = Math.floor(Math.random() * h);
      circle.translateX = 0;
      circle.translateY = 0;
      circle.size = Math.floor(Math.random() * 2) + size;
      circle.alpha = 0;
      circle.targetAlpha = Math.round((Math.random() * 0.6 + 0.1) * 10) / 10;
      circle.dx = (Math.random() - 0.5) * 0.1;
      circle.dy = (Math.random() - 0.5) * 0.1;
      circle.magnetism = 0.1 + Math.random() * 4;
    };

    const createCircle = (w: number, h: number): Circle => {
      const circle: Circle = {
        x: 0,
        y: 0,
        translateX: 0,
        translateY: 0,
        size: 0,
        alpha: 0,
        targetAlpha: 0,
        dx: 0,
        dy: 0,
        magnetism: 0,
      };
      initCircle(circle, w, h);
      return circle;
    };

    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d", { alpha: true });
    }

    const resizeCanvas = () => {
      if (canvasContainerRef.current && canvasRef.current && context.current) {
        const w = canvasContainerRef.current.offsetWidth;
        const h = canvasContainerRef.current.offsetHeight;
        canvasSize.current.w = w;
        canvasSize.current.h = h;
        canvasRef.current.width = w * dpr;
        canvasRef.current.height = h * dpr;
        canvasRef.current.style.width = `${w}px`;
        canvasRef.current.style.height = `${h}px`;
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

        updateRect();

        circles.current = [];
        for (let i = 0; i < quantity; i++) {
          circles.current.push(createCircle(w, h));
        }
      }
    };

    function animate() {
      const ctx = context.current;
      const w = canvasSize.current.w;
      const h = canvasSize.current.h;

      if (!ctx || w === 0 || h === 0) {
        rafID.current = null;
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const particleList = circles.current;
      const len = particleList.length;
      const rgbPrefix = rgbPrefixRef.current;
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;
      const PI2 = Math.PI * 2;

      for (let i = 0; i < len; i++) {
        const circle = particleList[i];

        // Distance from edges
        const currentX = circle.x + circle.translateX;
        const currentY = circle.y + circle.translateY;
        const dLeft = currentX - circle.size;
        const dRight = w - currentX - circle.size;
        const dTop = currentY - circle.size;
        const dBottom = h - currentY - circle.size;
        const closestEdge = Math.min(dLeft, dRight, dTop, dBottom);

        const remapClosestEdge =
          closestEdge > 20
            ? 1
            : closestEdge > 0
            ? Math.round(remapValue(closestEdge, 0, 20, 0, 1) * 100) / 100
            : 0;

        if (remapClosestEdge >= 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }

        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX +=
          (mouseX / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY +=
          (mouseY / (staticity / circle.magnetism) - circle.translateY) / ease;

        // Circle gets out of the canvas: reset in-place (zero GC)
        if (
          circle.x < -circle.size ||
          circle.x > w + circle.size ||
          circle.y < -circle.size ||
          circle.y > h + circle.size
        ) {
          initCircle(circle, w, h);
        }

        const renderX = circle.x + circle.translateX;
        const renderY = circle.y + circle.translateY;
        ctx.beginPath();
        ctx.arc(renderX, renderY, circle.size, 0, PI2);
        ctx.fillStyle = `rgba(${rgbPrefix}, ${circle.alpha})`;
        ctx.fill();
      }

      rafID.current = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (rafID.current == null && isVisibleRef.current && !document.hidden) {
        rafID.current = window.requestAnimationFrame(animate);
      }
    }

    function stopAnimation() {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
        rafID.current = null;
      }
    }

    resizeCanvas();

    const container = canvasContainerRef.current;
    if (!container) return;

    // IntersectionObserver to pause when completely scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: "200px 0px 200px 0px" },
    );
    observer.observe(container);

    const handleResize = () => {
      resizeCanvas();
    };

    const handleScroll = () => {
      updateRect();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (isVisibleRef.current) {
        startAnimation();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [quantity, staticity, ease, size, refresh, vx, vy, dpr]);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!isVisibleRef.current) return;
      const rect = containerRectRef.current;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={cn("pointer-events-none transform-gpu", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full transform-gpu" />
    </div>
  );
}

