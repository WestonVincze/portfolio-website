"use client";
import React, { useMemo, useEffect, useRef } from "react";
import styles from "./LinedPaper.module.css";
import { useAppState } from "@providers/AppStateProvider";
import { useInViewAnimation } from "@hooks/useInViewAnimation";
import Link from "next/link";

export interface LinedPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleLink?: string;
  children?: React.ReactNode;
}

/**
 * @param title will be placed above the "lines" within a `header`
 * @param children if no `section` elements are passed, content will be wrapped in a section, otherwise each `section` element (except the last) will have a single line margin to "double space" content
 */
export const LinedPaper = ({
  title,
  titleLink,
  children,
  ...props
}: LinedPaperProps) => {
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
          <h3 className={styles.title}>
            {titleLink ? (
              <Link href={titleLink}>
                {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-token-id="89"
                  width="1.3rem"
                  height="1.3rem"
                >
                  <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3H5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V9h-2z"></path>
                </svg>
              </Link>
            ) : (
              title
            )}
          </h3>
        </header>
      )}
      {hasSection ? children : <section>{children}</section>}
    </AnimatedArticle>
  );
};
