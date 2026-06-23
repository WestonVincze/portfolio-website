"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProjectCard.module.css";
import { ScreenshotMeta } from "@data/Projects/types";
import { StickyNote } from "@components/StickyNote";

interface FeaturedProjectCardProps {
  id: string;
  title: string;
  description: string;
  skills: string[];
  screenshot: ScreenshotMeta;
}

export const FeaturedProjectCard = ({
  id,
  title,
  description,
  skills,
  screenshot,
}: FeaturedProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`} className={styles.card}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/screenshots/${screenshot.url}`}
            alt={screenshot.alt}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
        <section className={styles.content}>
          <header>
            <h3>{title}</h3>
            <p>{description}</p>
          </header>
          <div className={styles.skills}>
            {skills.map((icon, i) => (
              <StickyNote key={i} variant="sticker" icon={icon} size="small" />
            ))}
          </div>
        </section>
      </div>
    </Link>
  );
};
