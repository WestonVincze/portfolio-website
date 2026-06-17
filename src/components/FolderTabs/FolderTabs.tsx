import React, { useState } from "react";
import styles from "./FolderTabs.module.css";
import { PaperPreview } from "./PaperPreview";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface FolderTab {
  path: string;
  text?: string;
  isActive?: boolean;
}
interface FolderTabsProps {
  tabs: FolderTab[];
}

export const FolderTabs = ({ tabs, ...props }: FolderTabsProps) => {
  const currentPage = "/" + usePathname().split('/')[1];
  const [hoverTab, setHoverTab] = useState<string | null>(null);

  function handleHover(path?: string): void {
    if (currentPage === path) return;
    setHoverTab(path || null);
  }

  return (
    <nav className={styles.folderTabs} {...props}>
      {tabs.map((tab, i) => (
        <span key={i} style={{ zIndex: tabs.length - i + 1 }}>
          <PaperPreview
            hover={hoverTab === tab.path}
            active={currentPage === tab.path}
            zIndex={tabs.length - i + 1}
          />
          <Link
            className={`${styles.folderTab} ${
              currentPage === tab.path ? styles.active : ""
            }`}
            href={tab.path}
            aria-label={tab.text}
            onFocus={() => handleHover(tab.path)}
            onBlur={() => handleHover()}
            onMouseEnter={() => handleHover(tab.path)}
            onMouseLeave={() => handleHover()}
          >
            {tab.text}
          </Link>
        </span>
      ))}
    </nav>
  );
};
