"use client";
import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const shootingStars = [];

    const STAR_COUNT = 150;
    const SHOOTING_STAR_FREQ = 120; // frames

    class Star {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.r = Math.random() * 1.2;
        this.alpha = Math.random();
        this.delta = Math.random() * 0.02;
      }
      draw() {
        this.alpha += this.delta;
        if (this.alpha <= 0 || this.alpha >= 1) this.delta *= -1;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h * 0.5;
        this.len = Math.random() * 80 + 100;
        this.speed = Math.random() * 10 + 6;
        this.angle = Math.PI / 4;
        this.alpha = 1;
      }
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - this.len * Math.cos(this.angle),
          this.y + this.len * Math.sin(this.angle)
        );
        ctx.strokeStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      update() {
        this.x += this.speed;
        this.y += this.speed;
        this.alpha -= 0.015;
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star());

    let frame = 0;

    function animate() {
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => s.draw());

      if (frame % SHOOTING_STAR_FREQ === 0) {
        shootingStars.push(new ShootingStar());
      }

      shootingStars.forEach((s, i) => {
        s.draw();
        s.update();
        if (s.alpha <= 0) shootingStars.splice(i, 1);
      });

      frame++;
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle at bottom, #05010a, #000000)",
      }}
    />
  );
}
