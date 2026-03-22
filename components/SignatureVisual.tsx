"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SignatureVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let animationId: number;
    let time = 0;

    const NUM_LINES = 24;
    const ACCENT = "#2B44FF";
    const INK_LIGHT = "#D4D4CC";

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < NUM_LINES; i++) {
        const progress = i / NUM_LINES;
        const x = progress * width;
        const phase = time * 0.015 + i * 0.3;

        // Wave-driven height
        const baseHeight = height * 0.15;
        const waveHeight =
          Math.sin(phase) * height * 0.25 +
          Math.sin(phase * 0.7 + 1.2) * height * 0.1;
        const lineHeight = baseHeight + waveHeight;

        // Color interpolation: first ~40% are accent, rest fade to light
        const accentThreshold = 0.35 + Math.sin(time * 0.008) * 0.1;
        const isAccent = progress < accentThreshold;

        const alpha = isAccent
          ? 0.6 + Math.sin(phase * 1.5) * 0.3
          : 0.15 + Math.sin(phase) * 0.1;

        ctx.beginPath();
        ctx.strokeStyle = isAccent ? ACCENT : INK_LIGHT;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = isAccent ? 2.5 : 1.5;
        ctx.lineCap = "round";

        // Slight rotation per line
        const angle =
          (Math.sin(phase * 0.5) * Math.PI) / 24 +
          (Math.cos(time * 0.005 + i) * Math.PI) / 48;

        const cx = x + 8;
        const cy = height / 2;
        const halfH = lineHeight / 2;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.moveTo(0, -halfH);
        ctx.lineTo(0, halfH);
        ctx.stroke();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      time++;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      className="w-full my-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-[80px] md:h-[100px]"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
