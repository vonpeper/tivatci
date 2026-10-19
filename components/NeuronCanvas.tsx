"use client";

import React, { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  connectedTo: number[];
  depth: number; // 0 to 1 for parallax & size
}

interface SynapticPulse {
  fromIndex: number;
  toIndex: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
  size: number;
}

export const NeuronCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNetwork();
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // Color palettes inspired by reference image
    const neuronColors = [
      { core: "#ffffff", glow: "rgba(0, 180, 255, 0.8)", pulse: "#38bdf8" },
      { core: "#fffbeb", glow: "rgba(245, 158, 11, 0.75)", pulse: "#fbbf24" },
      { core: "#e0f2fe", glow: "rgba(2, 132, 199, 0.7)", pulse: "#0284c7" },
    ];

    let neurons: Neuron[] = [];
    let pulses: SynapticPulse[] = [];

    const initNetwork = () => {
      neurons = [];
      pulses = [];

      // Determine count based on screen width
      const count = width < 640 ? 28 : width < 1024 ? 42 : 55;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const depth = Math.random() * 0.7 + 0.3; // 0.3 to 1.0
        const colorSet = neuronColors[Math.floor(Math.random() * neuronColors.length)];

        neurons.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: (Math.random() * 3 + 2.5) * depth,
          color: colorSet.core,
          glowColor: colorSet.glow,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          connectedTo: [],
          depth,
        });
      }

      // Establish synaptic connections (axons/dendrites)
      const maxDistance = width < 640 ? 120 : 170;
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance && neurons[i].connectedTo.length < 4) {
            neurons[i].connectedTo.push(j);
          }
        }
      }

      // Initial active pulses
      for (let i = 0; i < 18; i++) {
        spawnPulse();
      }
    };

    const spawnPulse = () => {
      if (neurons.length === 0) return;
      const fromIdx = Math.floor(Math.random() * neurons.length);
      const targets = neurons[fromIdx].connectedTo;
      if (!targets || targets.length === 0) return;

      const toIdx = targets[Math.floor(Math.random() * targets.length)];
      const isGold = Math.random() > 0.55;

      pulses.push({
        fromIndex: fromIdx,
        toIndex: toIdx,
        progress: 0,
        speed: 0.006 + Math.random() * 0.012,
        color: isGold ? "#fbbf24" : "#38bdf8",
        size: (isGold ? 2.5 : 2) * neurons[fromIdx].depth,
      });
    };

    initNetwork();

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Periodically trigger new action potentials / pulses
      if (frameCount % 12 === 0 && pulses.length < 35) {
        spawnPulse();
      }

      // Subtle float movement & mouse interaction
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        n.pulsePhase += n.pulseSpeed;

        // Subtle organic Brownian drift
        const driftX = Math.sin(n.pulsePhase * 0.7) * 4 * n.depth;
        const driftY = Math.cos(n.pulsePhase * 0.5) * 4 * n.depth;

        // Mouse displacement
        if (mouse.active) {
          const mdx = mouse.x - n.baseX;
          const mdy = mouse.y - n.baseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxRepel = 120;

          if (mDist < maxRepel && mDist > 0) {
            const force = (1 - mDist / maxRepel) * 25 * n.depth;
            n.x = n.baseX + driftX + (mdx / mDist) * force;
            n.y = n.baseY + driftY + (mdy / mDist) * force;

            // Trigger firing impulse near mouse
            if (Math.random() < 0.08 && n.connectedTo.length > 0) {
              const target = n.connectedTo[Math.floor(Math.random() * n.connectedTo.length)];
              pulses.push({
                fromIndex: i,
                toIndex: target,
                progress: 0,
                speed: 0.016,
                color: "#f59e0b",
                size: 3 * n.depth,
              });
            }
          } else {
            n.x = n.baseX + driftX;
            n.y = n.baseY + driftY;
          }
        } else {
          n.x = n.baseX + driftX;
          n.y = n.baseY + driftY;
        }
      }

      // 1. Draw Axons & Dendrites (connections)
      ctx.lineWidth = 1;
      for (let i = 0; i < neurons.length; i++) {
        const n1 = neurons[i];
        for (const targetIdx of n1.connectedTo) {
          const n2 = neurons[targetIdx];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const alpha = (1 - dist / 180) * 0.35 * Math.min(n1.depth, n2.depth);
          if (alpha <= 0) continue;

          // Gradient along the synapse
          const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
          grad.addColorStop(0, `rgba(0, 160, 240, ${alpha * 0.8})`);
          grad.addColorStop(0.5, `rgba(14, 165, 233, ${alpha * 1.2})`);
          grad.addColorStop(1, `rgba(245, 158, 11, ${alpha * 0.6})`);

          ctx.strokeStyle = grad;
          ctx.beginPath();

          // Organic curved axon (curved bezier)
          const midX = (n1.x + n2.x) / 2 + Math.sin(frameCount * 0.01 + i) * 6;
          const midY = (n1.y + n2.y) / 2 + Math.cos(frameCount * 0.01 + targetIdx) * 6;

          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(midX, midY, n2.x, n2.y);
          ctx.stroke();
        }
      }

      // 2. Draw Synaptic Electrical Pulses (Action Potentials)
      for (let pIdx = pulses.length - 1; pIdx >= 0; pIdx--) {
        const pulse = pulses[pIdx];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const nFrom = neurons[pulse.fromIndex];
        const nTo = neurons[pulse.toIndex];
        if (!nFrom || !nTo) {
          pulses.splice(pIdx, 1);
          continue;
        }

        const midX = (nFrom.x + nTo.x) / 2 + Math.sin(frameCount * 0.01 + pulse.fromIndex) * 6;
        const midY = (nFrom.y + nTo.y) / 2 + Math.cos(frameCount * 0.01 + pulse.toIndex) * 6;

        // Quadratic bezier interpolation
        const t = pulse.progress;
        const invT = 1 - t;
        const px = invT * invT * nFrom.x + 2 * invT * t * midX + t * t * nTo.x;
        const py = invT * invT * nFrom.y + 2 * invT * t * midY + t * t * nTo.y;

        // Pulse glow
        const glowRad = pulse.size * 4;
        const pGrad = ctx.createRadialGradient(px, py, 0, px, py, glowRad);
        pGrad.addColorStop(0, pulse.color === "#fbbf24" ? "rgba(254, 240, 138, 0.95)" : "rgba(224, 242, 254, 0.95)");
        pGrad.addColorStop(0.4, pulse.color === "#fbbf24" ? "rgba(245, 158, 11, 0.6)" : "rgba(14, 165, 233, 0.6)");
        pGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(px, py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(px, py, pulse.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw Neurons (Soma and Halo)
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        const pulseFactor = Math.sin(n.pulsePhase) * 0.3 + 1; // 0.7 to 1.3
        const currentRadius = n.radius * pulseFactor;

        // Radiant Outer Aura
        const auraRadius = currentRadius * 5.5;
        const auraGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, auraRadius);
        auraGrad.addColorStop(0, n.glowColor);
        auraGrad.addColorStop(0.5, n.glowColor.replace(/[\d\.]+\)$/, "0.2)"));
        auraGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner glowing body
        const innerGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, currentRadius * 1.5);
        innerGrad.addColorStop(0, "#ffffff");
        innerGrad.addColorStop(0.6, n.glowColor.includes("245") ? "#f59e0b" : "#0091ff");
        innerGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = innerGrad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright Nucleus
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto select-none"
      style={{ opacity: 0.85 }}
    />
  );
};
