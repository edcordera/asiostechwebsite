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

    // Keep the legal links embedded in the current Become iOS build valid
    // while moving canonical legal pages to the Become branded domain.
    if (incomingUrl.pathname === "/privacy.html") {
      return Response.redirect("https://become.asios.tech/privacy", 302);
    }
    if (incomingUrl.pathname === "/terms.html") {
      return Response.redirect("https://become.asios.tech/terms", 302);
    }

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
