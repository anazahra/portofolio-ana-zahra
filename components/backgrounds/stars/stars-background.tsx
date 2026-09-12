"use client";

import * as React from "react";

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  starCount?: number;
  speed?: number;
};

function StarsBackground({
  starCount = 400,
  speed = 2,
  className,
  ...props
}: StarsBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: { x: number; y: number; z: number }[] = [];
    let animationId: number;

    const initStars = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
      }));
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      if (width > 0 && height > 0 && stars.length === 0) {
        initStars();
      }
    };

    resize();

    const draw = () => {
      if (width > 0 && height > 0) {
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);

        stars.forEach((star) => {
          star.z -= speed;
          if (star.z <= 0) {
            star.x = Math.random() * width - centerX;
            star.y = Math.random() * height - centerY;
            star.z = width;
          }

          const k = 128 / star.z;
          const sx = star.x * k + centerX;
          const sy = star.y * k + centerY;

          if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
            const size = Math.max(0.1, (1 - star.z / width) * 3);
            const opacity = Math.max(0, Math.min(1, 1 - star.z / width));
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [starCount, speed]);

  return (
    <div ref={containerRef} className={className} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  );
}

export { StarsBackground, type StarsBackgroundProps };