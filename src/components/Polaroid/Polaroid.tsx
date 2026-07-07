import Image from "next/image";
import styles from "./Polaroid.module.css";

type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Which way the photo leans. Defaults to alternating feel via "left". */
  tilt?: "left" | "right" | "none";
  width?: number;
  height?: number;
};

export const Polaroid = ({
  src,
  alt,
  caption,
  tilt = "left",
  width = 320,
  height = 320,
}: PolaroidProps) => {
  return (
    <figure className={`${styles.polaroid} ${styles[tilt]}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.photo}
      />
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}
