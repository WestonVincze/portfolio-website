"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import type { MermaidConfig } from "mermaid";
import styles from "./MermaidChart.module.css";

function getMermaidTheme(): "dark" | "neutral" | "base" {
  if (typeof document === "undefined") return "neutral";
  const theme = document.body.dataset.theme;
  if (theme === "dark") return "dark";
  return "neutral";
}

interface MermaidChartProps {
  chart: string;
  title?: string;
  config?: Partial<MermaidConfig>;
}

export const MermaidChart = ({ chart, title, config }: MermaidChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    setError(false);

    const renderChart = async () => {
      const theme = getMermaidTheme();

      mermaid.initialize({
        startOnLoad: false,
        theme,
        ...config,
      });

      const el = containerRef.current;
      if (!el) return;

      el.textContent = chart;
      el.removeAttribute("data-processed");

      try {
        await mermaid.run({ nodes: [el] });
      } catch {
        setError(true);
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
  }, [chart, config]);

  return (
    <div className={styles.wrapper}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.chart}>
        {error ? (
          <div className={styles.error}>Could not render diagram</div>
        ) : (
          <div ref={containerRef} className={styles.mermaid}>
            {chart}
          </div>
        )}
      </div>
    </div>
  );
};
