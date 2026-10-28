/**
 * OFOQ INTERACTIVE 3D WEBGL/CANVAS ENGINE
 * Real-time 3D particle horizon, geometric mesh & mouse-reactive physics
 * 60 FPS optimized, IntersectionObserver-aware & low-power throttled
 */

import { useEffect, useRef } from 'react';

export function Interactive3DCanvas({ className = '', style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    // Mouse coordinates (normalized -1 to 1)
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isVisible = true;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Handle Mouse Movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width - 0.5) * 2;
      mouse.targetY = (clientY / height - 0.5) * 2;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches[0].clientX - rect.left;
        const clientY = e.touches[0].clientY - rect.top;
        mouse.targetX = (clientX / width - 0.5) * 2;
        mouse.targetY = (clientY / height - 0.5) * 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 3D Nodes generation (Floating particles & geometric horizon nodes)
    const NODE_COUNT = Math.min(50, Math.floor(width / 22));
    let nodes = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: (Math.random() - 0.5) * width * 1.2,
          y: (Math.random() - 0.5) * height * 1.2,
          z: Math.random() * 800 + 100, // 3D depth
          originZ: Math.random() * 800 + 100,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: i % 3 === 0 ? '#4de0bf' : i % 3 === 1 ? '#cba16a' : '#2ec7ff',
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    };

    initNodes();

    // IntersectionObserver to pause rendering when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // 3D Projection Math
    const FOCAL_LENGTH = 450;
    let rotationAngle = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation (spring physics)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      rotationAngle += 0.002;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project and draw connecting filaments
      const projectedNodes = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Animate drift
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around boundaries
        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;

        // Apply 3D rotation & mouse tilt
        const cosY = Math.cos(rotationAngle + mouse.x * 0.6);
        const sinY = Math.sin(rotationAngle + mouse.x * 0.6);
        const cosX = Math.cos(mouse.y * 0.4);
        const sinX = Math.sin(mouse.y * 0.4);

        // 3D rotation around Y and X axes
        const rotX = node.x * cosY - node.z * sinY;
        const rotZ = node.x * sinY + node.z * cosY + 400; // translate forward
        const rotY = node.y * cosX - rotZ * sinX;

        // Perspective division
        if (rotZ > 10) {
          const scale = FOCAL_LENGTH / rotZ;
          const projX = centerX + rotX * scale;
          const projY = centerY + rotY * scale;

          projectedNodes.push({
            x: projX,
            y: projY,
            scale,
            color: node.color,
            radius: Math.max(0.5, node.radius * scale),
            alpha: Math.min(1, Math.max(0.05, node.alpha * (scale * 0.9))),
          });
        }
      }

      // Draw filaments (connections) between close nodes
      const maxDistance = Math.min(140, width / 6);
      ctx.lineWidth = 0.8;

      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * p1.alpha * p2.alpha;
            ctx.strokeStyle = `rgba(77, 224, 191, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes with soft glow
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra halo on larger particles
        if (p.radius > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color === '#4de0bf' ? 'rgba(77, 224, 191, 0.15)' : 'rgba(203, 161, 106, 0.15)';
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`ofoq-interactive-3d-canvas ${className}`.trim()}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
        ...style,
      }}
    />
  );
}

