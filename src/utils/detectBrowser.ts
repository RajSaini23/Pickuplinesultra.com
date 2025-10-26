
export function detectBrowser() {
  const ua = window.navigator.userAgent;
  if (/chrome|crios/i.test(ua) && !/edge|edg/i.test(ua)) return "Chrome";
  if (/edg/i.test(ua)) return "Edge";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  if (/safari/i.test(ua) && !/chrome|crios|edg|fxios/i.test(ua)) return "Safari";
  // Common in-app browsers / search engine browsers
  if (/wv|fb_iab|instagram|line|search|explorer|duckduckgo|yandex|bing|baidu|amzn|aol/i.test(ua)) return "InAppBrowser";
  return "Other";
}
