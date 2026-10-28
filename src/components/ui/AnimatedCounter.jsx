import { useEffect, useState, useRef } from 'react';

/**
 * OFOQ ANIMATED COUNTER COMPONENT
 * Triggers counting animation when scrolled into viewport using IntersectionObserver.
 * Smooth deceleration using easeOutExpo curve via requestAnimationFrame.
 */
export function AnimatedCounter({
  target = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  className = '',
  style = {},
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [hasStarted, target]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    let animationFrameId = null;

    // Smooth exponential ease-out curve
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentVal = Math.round(easedProgress * target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className={className} style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', ...style }}>
      {prefix}{count}{suffix}
    </span>
  );
}
