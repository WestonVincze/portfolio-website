"use client";

import Script from "next/script";

const getUTMParams = (): Record<string, string | null> => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get("utm_source") || "direct",
      utm_medium: urlParams.get("utm_medium") || "none",
      utm_campaign: urlParams.get("utm_campaign") || "none",
    };
  }
  return { utm_source: "direct", utm_medium: "none", utm_campaign: "none" };
};

export const Analytics = ({ gtagId }: { gtagId: string }) => {
  const utmParams = getUTMParams();

  return (
    <>
      <Script
        id="_ga-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtagId}', {
              ${process.env.NODE_ENV === "development" ? "'debug': true" : ""},
              'utm_source': '${utmParams.utm_source}',
              'utm_medium': '${utmParams.utm_medium}',
              'utm_campaign': '${utmParams.utm_campaign}',
            });
          `,
        }}
      />
      <Script
        id="_ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
    </>
  );
};
