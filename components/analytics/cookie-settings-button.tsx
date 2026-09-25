"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event("foliocuts:cookie-settings"))}
    >
      Cookie settings
    </button>
  );
}
