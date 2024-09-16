import React, { useMemo, useEffect, useRef } from "react";
import styles from "./LinedPaper.module.css";
import { useAppState } from "@providers/AppStateProvider";
import { useInViewAnimation } from "@hooks/useInViewAnimation";

export interface LinedPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

/**
 * @param title will be placed above the "lines" within a `header`
 * @param children if no `section` elements are passed, content will be wrapped in a section, otherwise each `section` element (except the last) will have a single line margin to "double space" content
 */
export const LinedPaper = ({ title, children, ...props }: LinedPaperProps) => {
  const [ref, animatedStyle, AnimatedArticle] = useInViewAnimation("article");
  const { lineHeight, fontSize } = useAppState();
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // if height of header exceeds the heading section, change the line-height to match paper line height and maintain vertical rhythm
    const checkHeaderHeight = () => {
      if (!headerRef.current) return;

      // class is temporarily removed to check if header content would fit
      headerRef.current.classList.remove(styles.multiLine);

      if (headerRef.current.scrollHeight > fontSize * (lineHeight * 2)) {
        headerRef.current.classList.add(styles.multiLine);
      }
    };

    checkHeaderHeight();

    window.addEventListener("resize", checkHeaderHeight);

    return () => {
      window.removeEventListener("resize", checkHeaderHeight);
    };
  }, [fontSize, lineHeight]);

  const hasSection = useMemo(() => {
    return React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === "section",
    );
  }, [children]);

  return (
    <AnimatedArticle
      id={props.id}
      ref={ref}
      style={{
        ...animatedStyle,
        /* willChange: "transform, opacity", (consumes will-change memory budget) */
        ...props.style,
      }}
      className={`${styles.paper} ${!title ? styles.noTitle : ""}`.trim()}
    >
      {title && (
        <header ref={headerRef}>
          <h3 className={styles.title}>{title}</h3>
        </header>
      )}
      {hasSection ? children : <section>{children}</section>}
    </AnimatedArticle>
  );
};
