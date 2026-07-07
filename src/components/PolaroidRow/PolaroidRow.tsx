import { ReactNode } from "react";
import styles from "./PolaroidRow.module.css";

/**
 * Lays out multiple <Polaroid /> children side by side, like photos
 * spread on a desk. Wraps on small screens.
 */
export const PolaroidRow = ({ children }: { children: ReactNode }) => {
  return <div className={styles.row}>{children}</div>;
}
