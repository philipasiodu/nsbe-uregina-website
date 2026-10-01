"use client";

import { useEffect, useRef, useState } from "react";

export type HomepageStat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
};

type AnimatedCounterProps = HomepageStat & {
  delay: number;
  shouldAnimate: boolean;
};

function formatValue(
  value: number,
  { compact = false, prefix = "", suffix = "" }: Pick<
    HomepageStat,
    "compact" | "prefix" | "suffix"
  >,
) {
  let formatted = value.toLocaleString("en-CA");

  if (compact && value >= 1_000_000) {
    formatted = `${Math.round(value / 1_000_000)}M`;
  } else if (compact && value >= 1_000) {
    formatted = `${Math.round(value / 1_000)}K`;
  }

  return `${prefix}${formatted}${suffix}`;
}

function AnimatedCounter({
  value,
  label,
  prefix,
  suffix,
  compact,
  delay,
  shouldAnimate,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animationFrame = 0;
    let timeout = 0;

    if (reduceMotion) {
      animationFrame = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(animationFrame);
    }

    timeout = window.setTimeout(() => {
      const startedAt = performance.now();
      const duration = 1_650;

      const tick = (now: number) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 4);
        setDisplayValue(Math.round(value * eased));

        if (elapsed < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [delay, shouldAnimate, value]);

  const finalValue = formatValue(value, { compact, prefix, suffix });
  const animatedValue = formatValue(displayValue, { compact, prefix, suffix });

  return (
    <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
      <div className="mb-2 text-4xl font-black tabular-nums text-white sm:text-5xl">
        <span aria-hidden="true">{animatedValue}</span>
        <span className="sr-only">{finalValue}</span>
      </div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
        {label}
      </div>
    </div>
  );
}

export default function AnimatedStats({ stats }: { stats: HomepageStat[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              {...stat}
              delay={index * 140}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
