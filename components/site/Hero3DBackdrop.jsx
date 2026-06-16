"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle WebGL particle field behind the hero. Brand-coloured glowing points
 * drifting in 3D with gentle mouse + scroll parallax. Built on the global
 * Three.js (window.THREE) loaded in app/layout.js — no npm dependency.
 *
 * Deliberately restrained: it sits behind the existing aurora + hero wheel and
 * only adds depth, never noise. Honours prefers-reduced-motion, pauses when the
 * hero is scrolled out of view, and caps DPR so it stays cheap on phones.
 */
export default function Hero3DBackdrop() {
  const mountRef = useRef(null);

  useEffect(() => {
    const THREE = typeof window !== "undefined" ? window.THREE : null;
    const mount = mountRef.current;
    if (!THREE || !mount) return; // Graceful no-op if the CDN script hasn't loaded.

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Brand palette (matches tailwind.config.js).
    const PALETTE = [0x6e76ff, 0x8b93ff, 0xa06aff, 0xf8b84e].map(
      (c) => new THREE.Color(c)
    );

    const width = () => mount.clientWidth || 1;
    const height = () => mount.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width() / height(), 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width(), height());
    renderer.setClearColor(0x000000, 0); // transparent — let the page bg show.
    mount.appendChild(renderer.domElement);

    // Soft round glow sprite so points read as light, not squares.
    const sprite = (() => {
      const s = 64;
      const cv = document.createElement("canvas");
      cv.width = cv.height = s;
      const ctx = cv.getContext("2d");
      const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.25, "rgba(255,255,255,0.85)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
      const tex = new THREE.Texture(cv);
      tex.needsUpdate = true;
      return tex;
    })();

    // Fewer particles on small screens — keeps phones smooth.
    const COUNT = width() < 640 ? 280 : 520;
    const SPREAD = 26;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const drift = new Float32Array(COUNT); // per-point speed for organic motion

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
      const col = PALETTE[(Math.random() * PALETTE.length) | 0];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
      drift[i] = 0.2 + Math.random() * 0.8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.42,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // overlapping points = premium glow
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Pointer parallax (eased toward the target each frame).
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!reduceMotion) window.addEventListener("pointermove", onPointer, { passive: true });

    const clock = new THREE.Clock();
    let frameId = null;
    let visible = true;

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position.array;
      // Gentle vertical bob so the field feels alive but calm.
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] += Math.sin(t * drift[i] + i) * 0.002;
      }
      geometry.attributes.position.needsUpdate = true;

      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;

      points.rotation.y = t * 0.04 + current.x * 0.35;
      points.rotation.x = current.y * 0.2;

      renderer.render(scene, camera);
    };

    const loop = () => {
      renderFrame();
      frameId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (frameId == null && !reduceMotion) {
        clock.start();
        loop();
      }
    };
    const stop = () => {
      if (frameId != null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    // Pause when the hero scrolls out of view (saves battery/CPU).
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.01 }
    );
    io.observe(mount);

    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height());
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    if (reduceMotion) renderFrame(); // one static, lit frame
    else if (visible) start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-[1] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_92%)]"
    />
  );
}
