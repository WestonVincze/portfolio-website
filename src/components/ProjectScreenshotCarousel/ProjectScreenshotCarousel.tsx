"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectScreenshotCarousel.module.css";
import { ScreenshotMeta } from "@data/Projects";
import { ScreenshotModal } from "./ScreenshotModal";

const AUTO_SCROLL_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

type ProjectScreenshotCarouselProps = {
  screenshots: ScreenshotMeta[];
};

export const ProjectScreenshotCarousel = ({
  screenshots,
}: ProjectScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<ScreenshotMeta | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(
    new Set([0, 1]),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);

  const handleSelectScreenshot = (screenshot: ScreenshotMeta) => {
    setSelectedScreenshot(screenshot);
  };

  const handleCloseScreenshot = () => {
    setSelectedScreenshot(null);
  };

  const handleSwipe = () => {
    const difference = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = difference > SWIPE_THRESHOLD;
    const isRightSwipe = difference < -SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  useEffect(() => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    if (
      isHovering ||
      selectedScreenshot ||
      !autoScroll ||
      screenshots.length === 0
    ) {
      return;
    }

    autoScrollTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, AUTO_SCROLL_INTERVAL);

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
          prev === 0 ? screenshots.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setAutoScroll(false);
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
      } else if (
        e.key === "Enter" &&
        document.activeElement === imageButtonRef.current
      ) {
        handleSelectScreenshot(screenshots[currentIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshots.length, selectedScreenshot]);

  const handlePrevious = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Project screenshots carousel"
        aria-roledescription="carousel"
      >
        {screenshots.map((screenshot, index) => {
          const distance =
            (index - currentIndex + screenshots.length) % screenshots.length;
          const isVisible = distance < 3;
          const isCurrent = distance === 0;

          return (
            <button
              key={screenshot.url}
              ref={imageButtonRef}
              className={styles.carouselItem}
              data-distance={distance}
              style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              onClick={() => handleSelectScreenshot(screenshot)}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  handleSelectScreenshot(screenshot);
                }
              }}
              aria-label={`${screenshot.alt}. Press Enter or Space to view fullscreen`}
              aria-current={isCurrent ? "true" : "false"}
              tabIndex={isCurrent ? 0 : -1}
              aria-disabled={!isCurrent}
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
            </button>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          aria-label="Previous screenshot"
        >
          &#129032;
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
          &#129034;
        </button>
      </div>

      {selectedScreenshot && (
        <ScreenshotModal
          screenshot={selectedScreenshot}
          onClose={handleCloseScreenshot}
        />
      )}
    </div>
  );
};
