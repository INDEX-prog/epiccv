import Script from "next/script";
import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EpicCV - Transform Your Resume Into a Medieval Fantasy Masterpiece",
  description:
    "Stand out from the crowd with an epic medieval fantasy-themed resume. Our AI transforms your ordinary CV into a legendary tale that employers cannot ignore. Perfect for creative professionals.",
  keywords: [
    "resume builder",
    "CV writer",
    "medieval fantasy resume",
    "creative resume",
    "AI resume",
    "epic CV",
    "job seekers",
    "career",
  ],
  authors: [{ name: "EpicCV" }],
  openGraph: {
    title: "EpicCV - Transform Your Resume Into a Medieval Fantasy Masterpiece",
    description:
      "Stand out from the crowd with an epic medieval fantasy-themed resume. Our AI transforms your ordinary CV into a legendary tale.",
    url: "https://epiccv.vercel.app",
    siteName: "EpicCV",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EpicCV - Epic Medieval Fantasy Resumes",
    description:
      "Transform your resume into a legendary tale with our AI-powered tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="font-body">{children}
        {/* mm-bridge-start v1ac624a9d1 */}
        <Script id="mm-bridge" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "/* Mymicrocorp Bridge \u2014 visual element picker for the Website IDE.\n   Injected by Claude Code into every site it creates or modifies.\n   Only activates when the page is loaded inside an iframe AND the parent\n   has explicitly turned the picker on via a `mm-picker-toggle` message.\n   In inactive mode the bridge is a pure no-op: clicks/hovers pass through\n   so the user can browse their own site normally. */\n(function () {\n  if (typeof window === 'undefined' || window.self === window.top) {\n    try { console.log('[mm-bridge] inactive (not in iframe or no window)'); } catch (_) {}\n    return;\n  }\n  try { console.log('[mm-bridge] script loaded, will announce ready'); } catch (_) {}\n\n  var active = false;\n  var overlay = null;\n  var lastEl = null;\n\n  // \u2500\u2500 Selector synthesis \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  // Builds a SHORT, GREP-FRIENDLY css selector for `el`. Constraints:\n  //   - Total length <= 60 chars (longer selectors clutter the prompt and\n  //     rarely help Claude find the source \u2014 the tail is enough).\n  //   - Skip classes that look auto-generated or are pure utility noise:\n  //       * css-modules hashes (`Header_logo__a1b2c3`)\n  //       * emotion / styled-components (`css-1abc234`, `sc-fzqMZJ`)\n  //       * Tailwind arbitrary-value classes (`bg-[#fff]`, `w-[120px]`,\n  //         `[&_pre]:bg-black/40`) \u2014 these almost never identify a node\n  //         uniquely and they wreck readability.\n  //   - Prefer semantic classes (e.g. `hero-title`, `nav-link`).\n  //   - Always fall back to the plain tag name if nothing usable remains.\n  function _isNoiseClass(c) {\n    if (!c) return true;\n    if (c.length > 25) return true;                // overlong tailwind\n    if (/[\\[\\]\\(\\)\\/:!&]/.test(c)) return true;    // tailwind special chars\n    if (/^css-[a-z0-9]+$/i.test(c)) return true;   // emotion hash\n    if (/^sc-[a-z0-9]+$/i.test(c)) return true;    // styled-components hash\n    if (/__[a-z0-9]{4,}$/i.test(c)) return true;   // css-modules suffix\n    return false;\n  }\n\n  function buildSelector(el) {\n    if (!el || el.nodeType !== 1) return '';\n    if (el.id) return ('#' + el.id).slice(0, 60);\n\n    var tag = el.tagName.toLowerCase();\n    var sel = tag;\n\n    if (el.className && typeof el.className === 'string') {\n      var all = el.className.trim().split(/\\s+/);\n      var clean = [];\n      for (var i = 0; i < all.length && clean.length < 2; i++) {\n        if (!_isNoiseClass(all[i])) clean.push(all[i]);\n      }\n      if (clean.length) {\n        var candidate = tag + '.' + clean.join('.');\n        if (candidate.length <= 60) sel = candidate;\n        else if ((tag + '.' + clean[0]).length <= 60) sel = tag + '.' + clean[0];\n        // else: fall through to plain tag\n      }\n    }\n\n    // If we still only have a plain tag, prefix with parent#id when available\n    // (handy disambiguator) \u2014 but only if it fits the length budget.\n    if (sel === tag) {\n      var parent = el.parentElement;\n      if (parent && parent.id) {\n        var prefixed = '#' + parent.id + ' > ' + tag;\n        if (prefixed.length <= 60) sel = prefixed;\n      }\n    }\n\n    return sel;\n  }\n\n  // \u2500\u2500 Hover overlay (cyan outline + tag label) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  function ensureOverlay() {\n    if (overlay) return overlay;\n    overlay = document.createElement('div');\n    overlay.setAttribute('data-mm-overlay', '1');\n    overlay.style.cssText = [\n      'position:fixed',\n      'pointer-events:none',\n      'z-index:2147483646',\n      'border:2px solid #38bdf8',\n      'background:rgba(56,189,248,0.12)',\n      'box-shadow:0 0 0 1px rgba(0,0,0,0.4)',\n      'transition:all 60ms ease-out',\n      'display:none',\n    ].join(';');\n\n    var label = document.createElement('div');\n    label.setAttribute('data-mm-overlay-label', '1');\n    label.style.cssText = [\n      'position:absolute',\n      'top:-20px',\n      'left:0',\n      'padding:1px 6px',\n      'background:#38bdf8',\n      'color:#000',\n      'font:600 10px/14px ui-monospace,monospace',\n      'border-radius:3px',\n      'white-space:nowrap',\n      'max-width:300px',\n      'overflow:hidden',\n      'text-overflow:ellipsis',\n    ].join(';');\n    overlay.appendChild(label);\n\n    (document.body || document.documentElement).appendChild(overlay);\n    return overlay;\n  }\n\n  function moveOverlayTo(el) {\n    if (!el || el === overlay || (overlay && overlay.contains(el))) return;\n    var r = el.getBoundingClientRect();\n    if (r.width === 0 && r.height === 0) return;\n    var o = ensureOverlay();\n    o.style.display = 'block';\n    o.style.left = r.left + 'px';\n    o.style.top = r.top + 'px';\n    o.style.width = r.width + 'px';\n    o.style.height = r.height + 'px';\n    var label = o.firstChild;\n    if (label) label.textContent = buildSelector(el);\n  }\n\n  function hideOverlay() {\n    if (overlay) overlay.style.display = 'none';\n  }\n\n  // \u2500\u2500 Active-mode listeners (only attached when active) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  function onMove(e) {\n    var el = e.target;\n    if (!el || el.nodeType !== 1) return;\n    if (overlay && (el === overlay || overlay.contains(el))) return;\n    lastEl = el;\n    moveOverlayTo(el);\n  }\n\n  function onClick(e) {\n    if (!active) return;\n    var el = lastEl || e.target;\n    if (!el || el.nodeType !== 1) return;\n    e.preventDefault();\n    e.stopPropagation();\n    window.parent.postMessage({\n      type: 'mm-select',\n      selector: buildSelector(el),\n      tag: el.tagName,\n      text: (el.textContent || '').trim().slice(0, 60),\n    }, '*');\n    // One-shot: deactivate after selection so the user can resume browsing.\n    setActive(false);\n  }\n\n  function onKey(e) {\n    if (e.key === 'Escape' && active) {\n      setActive(false);\n      window.parent.postMessage({ type: 'mm-picker-state', active: false }, '*');\n    }\n  }\n\n  // \u2500\u2500 Toggle entrypoint \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  function setActive(next) {\n    if (active === next) return;\n    active = next;\n    if (active) {\n      document.documentElement.style.cursor = 'crosshair';\n      document.addEventListener('mousemove', onMove, true);\n      document.addEventListener('click', onClick, true);\n      document.addEventListener('keydown', onKey, true);\n      ensureOverlay();\n    } else {\n      document.documentElement.style.cursor = '';\n      document.removeEventListener('mousemove', onMove, true);\n      document.removeEventListener('click', onClick, true);\n      document.removeEventListener('keydown', onKey, true);\n      hideOverlay();\n      lastEl = null;\n    }\n  }\n\n  // \u2500\u2500 Parent \u2192 iframe message channel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  window.addEventListener('message', function (e) {\n    if (!e.data || typeof e.data !== 'object') return;\n    if (e.data.type === 'mm-picker-toggle') {\n      setActive(!!e.data.active);\n      // Ack so the parent can keep UI state in sync if it ever drifts.\n      window.parent.postMessage({ type: 'mm-picker-state', active: active }, '*');\n    }\n  });\n\n  // Announce that the bridge is loaded so the parent can enable the toggle\n  // button only when the iframe really has the bridge running. We retry a\n  // few times in case the parent listener wasn't attached yet at first ping\n  // (race on slow networks where the bridge loads before parent useEffect).\n  function announce() {\n    try {\n      window.parent.postMessage({ type: 'mm-bridge-ready' }, '*');\n      console.log('[mm-bridge] posted mm-bridge-ready to parent');\n    } catch (e) {\n      try { console.warn('[mm-bridge] postMessage failed:', e); } catch (_) {}\n    }\n  }\n  announce();\n  setTimeout(announce, 250);\n  setTimeout(announce, 1000);\n})();\n" }} />
        {/* mm-bridge-end */}
      </body>
    </html>
  );
}
