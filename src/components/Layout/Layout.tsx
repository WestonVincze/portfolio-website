"use client";

import { Heading } from "@components/Heading";
import { FolderBody } from "../FolderBody";
import { AppStateProvider } from "@providers/AppStateProvider";
import { useEffect } from "react";
import { initializeAnalytics } from "src/utils/analytics";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <AppStateProvider>
      <Heading />
      <FolderBody>{children}</FolderBody>
    </AppStateProvider>
  );
};
