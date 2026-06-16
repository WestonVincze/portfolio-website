"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectScreenshotCarousel.module.css";
import { ScreenshotMeta } from "@data/Projects";
import { ScreenshotModal } from "./ScreenshotModal";

type ProjectScreenshotCarouselProps = {
  screenshots: ScreenshotMeta[];
};

export const ProjectScreenshotCarousel = ({
  screenshots,
}: ProjectScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotMeta | null>(
    null,
  );
  const [loadedImages, setLoadedImages] = useState<Set<number>>(
    new Set([0, 1])
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectScreenshot = (screenshot: ScreenshotMeta) => {
    setSelectedScreenshot(screenshot);
  };

  const handleCloseScreenshot = () => {
    setSelectedScreenshot(null);
  };

  useEffect(() => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    if (isHovering || selectedScreenshot || !autoScroll || screenshots.length === 0) {
      return;
    }

    const interval = 3000;

    autoScrollTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, interval);

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [isHovering, selectedScreenshot, autoScroll, screenshots.length]);

  useEffect(() => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(currentIndex);
      if (currentIndex + 1 < screenshots.length) {
        newSet.add(currentIndex + 1);
      }
      if (currentIndex - 1 >= 0) {
        newSet.add(currentIndex - 1);
      }
      return newSet;
    });
  }, [currentIndex, screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedScreenshot) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setAutoScroll(false);
        setCurrentIndex((prev) =>
          prev === 0 ? screenshots.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setAutoScroll(false);
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshots.length, selectedScreenshot]);

  const handlePrevious = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handleDotClick = (index: number) => {
    setAutoScroll(false);
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setAutoScroll(true);
        }}
      >
        {screenshots.map((screenshot, index) => {
          const distance =
            (index - currentIndex + screenshots.length) % screenshots.length;
          const isVisible = distance < 3;

          return (
            <div
              key={screenshot.url}
              className={styles.carouselItem}
              data-distance={distance}
              style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              onClick={() => handleSelectScreenshot(screenshot)}
            >
              {loadedImages.has(index) ? (
                <Image
                  src={`/images/screenshots/${screenshot.url}`}
                  alt={screenshot.alt}
                  width={1200}
                  height={800}
                  priority={index < 2}
                />
              ) : (
                <div className={styles.placeholder} />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          aria-label="Previous screenshot"
        >
          {`<`}
        </button>

        <div className={styles.dotsContainer}>
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={styles.dot}
              data-active={index === currentIndex}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next screenshot"
        >
          {`>`}
        </button>
      </div>

      {selectedScreenshot && (
        <ScreenshotModal screenshot={selectedScreenshot} onClose={handleCloseScreenshot}  />
      )}
    </div>
  );
};
