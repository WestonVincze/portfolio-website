import "../src/styles/globals.css";
import { Metadata } from "next";
import { Layout } from "@components/Layout";
import { Poppins, Montserrat } from "next/font/google";
import Script from "next/script";

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
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtagId}', { 'debug_mode':true });
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
