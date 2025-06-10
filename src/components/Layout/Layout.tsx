"use client";

import { Heading } from "@components/Heading";
import { FolderBody } from "../FolderBody";
import { AppStateProvider } from "@providers/AppStateProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AppStateProvider>
      <Heading />
      <FolderBody>{children}</FolderBody>
    </AppStateProvider>
  );
};
