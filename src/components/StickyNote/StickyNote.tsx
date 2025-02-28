import styles from "./StickyNote.module.css";
import { Icons, IconName } from "@assets/Icons";

interface StickyNoteProps {
  icon: IconName;
  showText?: boolean;
  text?: string;
  variant?: "taped" | "sticker";
  size?: "medium" | "small";
}

export const StickyNote = ({
  icon,
  showText = true,
  text,
  variant = "taped",
  size = "medium",
  ...props
}: StickyNoteProps) => {
  if (!text) {
    text = Icons[icon] ? Icons[icon].title : "";
  }

  return (
    <div
      className={`${styles.stickyNote} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      <div className={styles.content}>{Icons[icon] && Icons[icon].icon()}</div>
      {showText && <div className={styles.text}>{text}</div>}
    </div>
  );
};
