"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const consentKey = "foliocuts-cookie-consent-v1";

declare global {
  interface Window {
    _hsq?: unknown[][];
  }
}

type Consent = "accepted" | "declined" | null;

function PageViewTracker({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled || !window._hsq) return;
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    if (previousPath.current === null) {
      previousPath.current = path;
      return;
    }
    if (previousPath.current === path) return;
    previousPath.current = path;
    window._hsq.push(["setPath", path]);
    window._hsq.push(["trackPageView"]);
  }, [enabled, pathname, searchParams]);

  return null;
}

export default function HubSpotTracking() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem(consentKey) as Consent);
    setReady(true);

    const showSettings = () => setConsent(null);
    window.addEventListener("foliocuts:cookie-settings", showSettings);
    return () => window.removeEventListener("foliocuts:cookie-settings", showSettings);
  }, []);

  function choose(value: Exclude<Consent, null>) {
    const wasAccepted = consent === "accepted";
    localStorage.setItem(consentKey, value);
    setConsent(value);

    if (value === "declined") {
      ["hubspotutk", "__hstc", "__hssc", "__hssrc", "messagesUtk"].forEach((name) => {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.markian.fit`;
      });
      if (wasAccepted) window.location.reload();
    }
  }

  if (!ready) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            id="hs-script-loader"
            src="https://js-eu1.hs-scripts.com/149410324.js"
            strategy="afterInteractive"
            onLoad={() => setScriptLoaded(true)}
          />
          <Suspense fallback={null}>
            <PageViewTracker enabled={scriptLoaded} />
          </Suspense>
        </>
      )}

      {consent === null && (
        <aside className="cookie-banner" aria-label="Cookie preferences">
          <div>
            <strong>Help us improve FolioCuts</strong>
            <p>
              We use optional HubSpot analytics cookies to understand which pages help
              barbershop owners. Read our <Link href="/privacy">privacy policy</Link>.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="button cookie-decline" onClick={() => choose("declined")}>
              Decline
            </button>
            <button type="button" className="button" onClick={() => choose("accepted")}>
              Accept analytics
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
