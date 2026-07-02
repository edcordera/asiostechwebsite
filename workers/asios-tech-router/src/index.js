const UPSTREAM_ORIGIN = "https://asios-tech.pages.dev";
const HTML_PATHS = new Set([
  "/index.html",
  "/privacy.html",
  "/terms.html",
  "/support.html",
  "/feedback.html",
]);

function upstreamPath(pathname) {
  if (pathname === "/index.html") return "/";
  if (HTML_PATHS.has(pathname)) return pathname.slice(0, -5);
  return pathname;
}

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
    const upstreamUrl = new URL(UPSTREAM_ORIGIN);
    upstreamUrl.pathname = upstreamPath(incomingUrl.pathname);
    upstreamUrl.search = incomingUrl.search;

    const upstreamRequest = new Request(upstreamUrl, request);
    const upstreamResponse = await fetch(upstreamRequest);

    const headers = new Headers(upstreamResponse.headers);
    const location = headers.get("location");
    if (location?.startsWith(UPSTREAM_ORIGIN)) {
      headers.set("location", location.replace(UPSTREAM_ORIGIN, incomingUrl.origin));
    }

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers,
    });
  },
};
