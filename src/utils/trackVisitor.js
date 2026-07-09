const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let os = 'Unknown';
  let device = 'Desktop';

  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  if (/Android|iPhone|iPad|iPod/i.test(ua)) device = 'Mobile';
  else if (/Tablet|iPad/i.test(ua)) device = 'Tablet';

  return { browser, os, device };
}

function getPageName() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  if (hash) return hash.replace('#', '/');
  if (path === '/' || path === '') return 'Home';
  return path;
}

export async function trackVisitor() {
  if (!WEBHOOK_URL) return;

  try {
    const { browser, os, device } = getBrowserInfo();
    const page = getPageName();
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    let location = 'Unknown';
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      location = `${data.city || 'Unknown'}, ${data.region || ''}, ${data.country_name || 'Unknown'}`.trim();
    } catch {
      location = 'Could not detect';
    }

    const embed = {
      title: '🔍 New Portfolio Visit!',
      color: 0x00ff66,
      fields: [
        { name: '📍 Location', value: location, inline: true },
        { name: '💻 Browser', value: browser, inline: true },
        { name: '🖥️ OS', value: os, inline: true },
        { name: '📱 Device', value: device, inline: true },
        { name: '📄 Page', value: page, inline: true },
        { name: '🕐 Time (IST)', value: timestamp, inline: true },
      ],
      footer: {
        text: 'Monish M Portfolio Tracker',
      },
    };

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });
  } catch (err) {
    console.error('Visitor tracking failed:', err);
  }
}
