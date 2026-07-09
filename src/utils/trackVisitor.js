const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

/**
 * Parses the browser's User-Agent string to extract
 * browser name, operating system, and device type.
 */
function getBrowserInfo() {
  const ua = navigator.userAgent;

  // Detect browser
  let browser = 'Unknown';
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  // Detect operating system
  let os = 'Unknown';
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  // Detect device type
  let device = 'Desktop';
  if (/Android|iPhone|iPad|iPod/i.test(ua)) device = 'Mobile';
  else if (/Tablet/i.test(ua)) device = 'Tablet';

  return { browser, os, device };
}

/**
 * Fetches the visitor's approximate location using ipwho.is
 * (free, no API key required).
 * Returns an object with country, city, region, and ip.
 * Falls back to "Unknown" values if the request fails.
 */
async function getVisitorLocation() {
  const fallback = {
    country: 'Unknown',
    city: 'Unknown',
    region: 'Unknown',
    ip: 'Unknown',
  };

  try {
    const res = await fetch('https://ipwho.is/');
    const data = await res.json();

    // ipwho.is returns { success: false } if the lookup fails
    if (!data.success) return fallback;

    return {
      country: data.country || fallback.country,
      city: data.city || fallback.city,
      region: data.region || fallback.region,
      ip: data.ip || fallback.ip,
    };
  } catch {
    // API request failed — return fallback values
    return fallback;
  }
}

/**
 * Returns a friendly page name based on the current URL path/hash.
 */
function getPageUrl() {
  return window.location.href;
}

/**
 * Returns the referrer URL if available, otherwise "Direct Visit".
 */
function getReferrer() {
  return document.referrer || 'Direct Visit';
}

/**
 * Main tracking function — fetches visitor info and sends
 * a Discord webhook embed. Designed to never block page loading.
 */
export async function trackVisitor() {
  // Bail early if no webhook URL is configured
  if (!WEBHOOK_URL) return;

  try {
    // Gather all visitor data in parallel where possible
    const [{ browser, os, device }, location] = await Promise.all([
      Promise.resolve(getBrowserInfo()),
      getVisitorLocation(),
    ]);

    const pageUrl = getPageUrl();
    const referrer = getReferrer();
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Build the Discord embed with all visitor details
    const embed = {
      title: '🔍 New Portfolio Visit!',
      color: 0x00ff66,
      fields: [
        // Location section
        { name: '🌍 Country', value: location.country, inline: true },
        { name: '🏙️ City', value: location.city, inline: true },
        { name: '📍 Region', value: location.region, inline: true },
        { name: '🌐 IP Address', value: location.ip, inline: true },

        // Device section
        { name: '💻 Browser', value: browser, inline: true },
        { name: '📱 Device', value: device, inline: true },
        { name: '🖥️ OS', value: os, inline: true },
        { name: '🕒 Time (IST)', value: timestamp, inline: true },

        // Visit info (full width)
        { name: '🔗 Page URL', value: pageUrl, inline: false },
        { name: '🌐 Referrer', value: referrer, inline: false },
      ],
      footer: {
        text: 'Monish M Portfolio Tracker',
      },
      timestamp: new Date().toISOString(),
    };

    // Send to Discord (fire-and-forget)
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });
  } catch (err) {
    // Silently log — never break the page
    console.error('Visitor tracking failed:', err);
  }
}
