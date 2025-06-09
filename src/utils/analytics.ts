declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export type EventCategory =
  | "engagement"
  | "navigation"
  | "conversion"
  | "error";

export type EventAction =
  | "button_click"
  | "page_view"
  | "download"
  | "link_click";

export interface AnalyticsEvent {
  event_category: EventCategory;
  event_action: EventAction;
  event_label?: string;
  value?: number;
  utm_source?: string; // google
  utm_medium?: string; // organic traffic, cpc, referral, social, email, direct
  utm_campaign?: string;
}

export const parseUTMParams = (): Record<string, string | null> => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"),
    utm_campaign: urlParams.get("utm_campaign"),
  };
};

export const persistUTMParams = () => {
  const utmParams = parseUTMParams();
  const sessionUTM = sessionStorage.getItem("utm_params");

  if (!sessionUTM) {
    sessionStorage.setItem("utm_params", JSON.stringify(utmParams));
  }
};

export const getPersistedUTMParams = (): Record<string, string | null> => {
  const sessionUTM = sessionStorage.getItem("utm_params");
  return sessionUTM ? JSON.parse(sessionUTM) : {};
};

const isDuplicateEvent = (event: AnalyticsEvent): boolean => {
  // TODO: should each event have a generated ID?
  const eventKey = `${event.event_action}-${event.event_label || ""}`;
  const trackedEvents = JSON.parse(
    sessionStorage.getItem("tracked_events") || "[]",
  );

  if (trackedEvents.includes(eventKey)) {
    return true;
  }

  trackedEvents.push(eventKey);
  sessionStorage.setItem("tracked_events", JSON.stringify(trackedEvents));
  return false;
};

export const trackEvent = (event: AnalyticsEvent) => {
  // check for duplicate events
  if (isDuplicateEvent(event)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Duplicate event prevented: ${event.event_action}`);
    }
    return;
  }

  const utmParams = getPersistedUTMParams();
  const eventWithUTM = {
    ...event,
    utm_source: event.utm_source || utmParams.utm_source,
    utm_medium: event.utm_medium || utmParams.utm_medium,
    utm_campaign: event.utm_campaign || utmParams.utm_campaign,
  };

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventWithUTM.event_action, {
      event_category: eventWithUTM.event_category,
      event_label: eventWithUTM.event_label,
      value: eventWithUTM.value,
      utm_source: eventWithUTM.utm_source,
      utm_medium: eventWithUTM.utm_medium,
      utm_campaign: eventWithUTM.utm_campaign,
    });
  } else if (process.env.NODE_ENV !== "production") {
    console.warn("Google Analytics is not initialized.");
  }
};

export const initializeAnalytics = () => {
  if (typeof window !== "undefined") {
    persistUTMParams();
  }
};
