# LCP

LCP, or Largest Contentful Paint, is a core user experience metric used to measure how quickly the main content of a web page loads. 
It is one of Google’s Core Web Vitals.

LCP marks the point in the page load timeline when the largest text block or image becomes visible within the viewport.
It is a "user-centric" metric because it aligns with the user's perception: **"When can I actually see the most important part of this page?"**

### Common LCP Elements
- Large images (img tags).
- Video poster images.
- Background images loaded via CSS.
- Large blocks of text (like h1 or div containing paragraphs).


## Thresholds
To provide a good user experience, sites should strive to have LCP occur within the first 2.5 seconds of the page starting to load.

| Range        | Status |
|-------------|--------|
| 🟢 0 – 2.5s  | Good |
| 🟡 2.5s – 4.0s | Needs Improvement |
| 🔴 Over 4.0s | Poor |


## Phases of LCP
Understanding why LCP is slow requires breaking it down into these four sub-parts.

- [Time to First Byte (TTFB)](/ttfb): How long it takes the server to respond.
- Resource Load Delay: The gap between the first byte and the browser starting to download the LCP image/asset.
- Resource Load Duration: The time it takes to actually download the LCP asset.
- Element Render Delay: The time between the asset finishing its download and being painted on the screen.


## Improve LCP
If your LCP is slow, focus on these high-impact optimizations:

- Prioritize the LCP image: Use link rel="preload" or the fetchpriority="high" attribute on your main hero image so the browser knows to download it immediately.
- Optimize Server Response: Use a Content Delivery Network (CDN) and caching to reduce TTFB.
- [Compress Images](/compressor): Serve images in modern formats like WebP or AVIF and ensure they are sized correctly for the user's screen.
- Eliminate Render-Blocking JS/CSS: Ensure that heavy scripts aren't stopping the browser from painting the main content.


