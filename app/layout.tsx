import "../src/styles/globals.css";
import { Metadata } from "next";
import { Layout } from "@components/Layout";
import { Poppins, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://westonvincze.com"),
  title: {
    template: "Weston Vincze | %s",
    absolute: "Weston Vincze",
  },
  description: "Portfolio Website built by Weston Vincze using NextJS.",
  keywords: ["Web Development", "Portfolio", "NextJS", "Weston Vincze"],
  openGraph: {
    title: "Weston Vincze Portfolio",
    siteName: "Weston Vincze - Frontend Developer",
    url: "https://westonvincze.com",
    images: ["/images/og-image.png", "/images/og-image-dark.png"],
    locale: "en_CA",
    type: "website",
  },
};

export const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
