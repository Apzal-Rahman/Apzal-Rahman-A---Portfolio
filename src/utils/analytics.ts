/**
 * Analytics Utility for Google Analytics 4 (GA4)
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initialize Google Analytics 4 (GA4)
 * @param measurementId GA4 Measurement ID starting with 'G-' (e.g. 'G-XXXXXXXXXX')
 */
export function initGA4(measurementId: string) {
  if (!measurementId || typeof window === 'undefined') return;

  // Check if script already injected
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });
}

/**
 * Track custom events to GA4
 * @param eventName e.g., 'view_resume', 'contact_click', 'credential_verify'
 * @param params Additional event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

