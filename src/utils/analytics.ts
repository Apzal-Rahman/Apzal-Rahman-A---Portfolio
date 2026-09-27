/**
 * Analytics Utility for Google Analytics 4 (GA4) & Google Tag Manager (GTM)
 * Supports direct gtag.js events and window.dataLayer pushes for GTM tags & triggers.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Initialize Google Analytics 4 (GA4)
 * @param measurementId GA4 Measurement ID starting with 'G-' (e.g. 'G-3ELF0DKPF1')
 */
export function initGA4(measurementId: string) {
  if (!measurementId || typeof window === 'undefined') return;

  // Initialize dataLayer first so events queued early are captured
  window.dataLayer = window.dataLayer || [];

  // Define gtag wrapper
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // Prevent duplicate script injection
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });
}

/**
 * Initialize Google Tag Manager (GTM) container
 * @param gtmContainerId GTM Container ID starting with 'GTM-' (e.g. 'GTM-XXXXXXX')
 */
export function initGTM(gtmContainerId: string) {
  if (!gtmContainerId || typeof window === 'undefined') return;
  if (
    document.getElementById('gtm-script') ||
    document.querySelector('script[src*="googletagmanager.com/gtm.js"]')
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}`;
  document.head.appendChild(script);
}

/**
 * Track events to GA4 and push directly to window.dataLayer for Google Tag Manager (GTM)
 * @param eventName Name of the event (e.g., 'generate_lead', 'resume_click_top_bar')
 * @param params Additional event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // 1. Ensure dataLayer exists and push event for Google Tag Manager triggers
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...(params || {}),
  });

  // 2. Direct gtag dispatch for Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // 3. Dispatch custom event to Microsoft Clarity
  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName);
  }
}

/**
 * Specific Key Event Tracker for Resume Buttons:
 * - Resume 1: Top Bar (Desktop & Mobile) -> 'resume_click_top_bar' & 'resume_click'
 * - Resume 2: Experience Area Top Button  -> 'resume_click_experience' & 'resume_click'
 * - Resume 3: Bottom of Page (Footer)     -> 'resume_click_footer' & 'resume_click'
 */
export type ResumeLocation = 'top_bar' | 'experience_section' | 'footer_section' | 'hero_section';

export function trackResumeClick(
  location: ResumeLocation,
  extraMeta?: { buttonId?: string; buttonName?: string }
) {
  const locationMap: Record<ResumeLocation, { eventName: string; number: number; label: string }> = {
    top_bar: {
      eventName: 'resume_click_top_bar',
      number: 1,
      label: 'Resume 1 (Top Bar)',
    },
    experience_section: {
      eventName: 'resume_click_experience',
      number: 2,
      label: 'Resume 2 (Experience Area)',
    },
    footer_section: {
      eventName: 'resume_click_footer',
      number: 3,
      label: 'Resume 3 (Bottom Footer)',
    },
    hero_section: {
      eventName: 'resume_click_hero',
      number: 0,
      label: 'Resume Hero Action',
    },
  };

  const meta = locationMap[location] || locationMap.top_bar;

  // 1. Send specific granular event (easy to make a Key Event in GA4 or trigger in GTM)
  trackEvent(meta.eventName, {
    button_location: location,
    button_number: meta.number,
    button_name: meta.label,
    ...(extraMeta || {}),
  });

  // 2. Send unified resume_click event with dimensions
  trackEvent('resume_click', {
    button_location: location,
    button_number: meta.number,
    button_name: meta.label,
    ...(extraMeta || {}),
  });
}

/**
 * Specific Key Event Tracker for Lead Generation (Contact / Callback Form)
 * Emits GA4 recommended conversion event 'generate_lead' plus custom 'lead_form_submitted'
 */
export function trackLeadSubmission(details: {
  purpose: string;
  hasPhone: boolean;
  hasEmail: boolean;
  preferredTime?: string;
  source?: string;
}) {
  // GA4 Recommended Event: 'generate_lead' is automatically recognized in GA4 as a Key Event/Conversion
  trackEvent('generate_lead', {
    value: 1,
    currency: 'USD',
    lead_type: details.purpose,
    lead_source: details.source || 'portfolio_callback_form',
    contact_mode: details.hasPhone ? 'phone_and_email' : 'email_only',
    preferred_call_time: details.preferredTime || 'Anytime',
  });

  // Custom event for granular event reporting
  trackEvent('lead_form_submitted', {
    purpose: details.purpose,
    preferredTime: details.preferredTime || 'Anytime',
    source: details.source || 'web3forms_callback',
  });
}
