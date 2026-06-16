"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ScreenshotModal.module.css";
import { ScreenshotMeta } from "@data/Projects";

type ScreenshotModalProps = {
  screenshot: ScreenshotMeta;
  onClose: () => void;
};

export const ScreenshotModal = ({
  screenshot,
  onClose,
}: ScreenshotModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className={styles.imageContainer}>
          <Image
            src={`/images/screenshots/${screenshot.url}`}
            alt={screenshot.alt}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className={styles.modalImage}
          />
        </div>

        <div className={styles.footer}>
          <p className={styles.title}>
            {screenshot.description ?? screenshot.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
