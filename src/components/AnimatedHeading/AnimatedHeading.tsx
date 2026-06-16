import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Typewriter } from "../Typewriter";
import { useAppState } from "@providers/AppStateProvider";
import styles from "./AnimatedHeading.module.css";

type Path = "/" | "/resume" | "/projects";

const subHeadingText = {
  "/": "<Freelance Web Developer />",
  "/resume": "<My Resume />",
  "/projects": "<My Projects />",
};

export const AnimatedHeading = () => {
  const currentPage = usePathname() as Path;

  return (
    <header className={styles.header}>
      <h1>Hi, I'm Weston Vincze</h1>
      <h2>{subHeadingText[currentPage]}</h2>
    </header>
  );
};
