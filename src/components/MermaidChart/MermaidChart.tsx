"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useInViewAnimation } from "@hooks/useInViewAnimation";
import styles from "./MermaidChart.module.css";

let lastTheme = "";

function initMermaid(theme: "dark" | "neutral" | "base") {
  if (lastTheme !== theme) {
    mermaid.initialize({
      startOnLoad: false,
      fontFamily: "var(--montserrat)",
      theme,
      look: "handDrawn",
      layout: "dagre",
    });
    lastTheme = theme;
  }
}

function getMermaidTheme(): "dark" | "neutral" | "base" {
  if (typeof document === "undefined") return "neutral";
  const theme = document.body.dataset.theme;
  if (theme === "dark") return "dark";
  return "neutral";
}

interface MermaidChartProps {
  chart: string;
  title: string;
  fallbackUrl?: string;
}

export const MermaidChart = ({
  chart,
  title,
  fallbackUrl,
}: MermaidChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);
  const [ref, animatedStyle, AnimatedDiv] = useInViewAnimation(
    "div",
    "slideUp",
  );

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    setError(false);

    const renderChart = async () => {
      if (!mountedRef.current) return;

      const theme = getMermaidTheme();
      initMermaid(theme);

      try {
        const id = `m-${
          crypto.randomUUID?.() ?? Math.random().toString(36).slice(2, 11)
        }`;
        const { svg } = await mermaid.render(id, chart);

        const el = containerRef.current;
        if (el && mountedRef.current) {
          el.innerHTML = svg;
        }
      } catch (e: unknown) {
        if (mountedRef.current) {
          setError(true);
          console.error("Error rendering mermaid chart:", e);
        }
      }
    };

    renderChart();

    const observer = new MutationObserver(() => {
      renderChart();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [chart]);

  return (
    <div className={styles.wrapper}>
      <AnimatedDiv ref={ref} className={styles.chart} style={animatedStyle}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {error ? (
          <div className={styles.error}>
            <span>Could not render diagram</span>
            {fallbackUrl && (
              <a href={fallbackUrl} target="_blank" rel="noreferrer">
                view on GitHub
              </a>
            )}
          </div>
        ) : (
          <div ref={containerRef} className={styles.mermaid} />
        )}
      </AnimatedDiv>
    </div>
  );
};
