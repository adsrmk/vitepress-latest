# LCP and FCP

**First Contentful Paint (FCP)** is the moment the user first sees *any* part of the page's content on the screen. This is the critical first impression, the point at which the user's screen transitions from a blank white page to something that confirms the page is loading.

FCP measures the time until the browser renders the first piece of content, which can be text, an image, a Scalable Vector Graphic (SVG), or a non-white canvas element. A fast FCP reassures the user that the process is underway, reducing the likelihood of them abandoning the page.

### FCP Performance Thresholds

To ensure a good user experience, sites should aim for an FCP score that is fast for the majority of users. The recommended threshold is based on the 75th percentile of page loads.

| Performance Category | FCP Score (75th Percentile) | User Perception |
| :--- | :--- | :--- |
| **Good** | **≤ 1.8 seconds** | The page is loading quickly. |
| Needs Improvement | 1.8 to 3.0 seconds | The page is loading, but could be faster. |
| Poor | > 3.0 seconds | The page is loading slowly, causing frustration. |

<br>

### Key Optimization Areas for FCP

Improving FCP is largely about minimizing the time it takes for the browser to start rendering the initial content. This involves streamlining the critical rendering path.

<br>

| Optimization Strategy | Description | Developer Action |
| :--- | :--- | :--- |
| **Eliminate Render-Blocking Resources** | The browser must download and process CSS and JavaScript before it can render content. | Use `async` or `defer` for non-critical scripts; inline critical CSS; use media queries for non-critical CSS. |
| **Reduce Server Response Time (TTFB)** | The time it takes for the server to respond with the first byte of content. | Optimize server-side code, use a Content Delivery Network (CDN), and implement caching. |
| **Preconnect to Required Origins** | Establish early connections to important third-party origins. | Use `<link rel="preconnect">` for domains hosting critical assets (e.g., fonts, APIs). |
| **Minimize Critical Request Depth** | Reduce the number of dependencies that must be loaded before the main content can render. | Reduce the number of critical files and ensure they are small. |

<br>

## Largest Contentful Paint (LCP): Main Event

While FCP is the first paint, **Largest Contentful Paint (LCP)** is the moment the page's *main content* has loaded. It reports the render time of the single largest image, text block, or video element visible within the viewport. LCP is a strong proxy for the page's perceived load speed, as it marks the point when the user can meaningfully engage with the primary content.


### LCP Performance Thresholds

A fast LCP is crucial for user satisfaction and is a key ranking factor for search engines.

| Performance Category | LCP Score (75th Percentile) | User Perception |
| :--- | :--- | :--- |
| **Good** | **≤ 2.5 seconds** | The page is fully loaded and ready for interaction. |
| Needs Improvement | 2.5 to 4.0 seconds | The main content is taking a noticeable time to appear. |
| Poor | > 4.0 seconds | The page feels broken or extremely slow. |

### Elements Considered for LCP

The LCP element is dynamically determined during the page load. It is always one of the following types of elements:

*   `<img>` elements.
*   `<image>` elements inside an `<svg>`.
*   Elements with a background image loaded via a `url()` function (e.g., CSS background images), provided they are block-level elements.
*   Block-level text elements (e.g., `<h1>`, `<p>`) containing text nodes.
*   `<video>` elements (using the poster image load time).


## LCP vs. FCP: A Developer's Perspective

While both metrics measure "paint," they serve distinct purposes in the user journey. FCP is about the start of the loading experience, while LCP is about the completion of the main loading experience.

| Feature | First Contentful Paint (FCP) | Largest Contentful Paint (LCP) |
| :--- | :--- | :--- |
| **What it Measures** | The time until the first piece of content appears. | The time until the largest content element appears. |
| **User Question** | "Is this page loading?" | "Is the main content here yet?" |
| **Goal Threshold** | **≤ 1.8 seconds** | **≤ 2.5 seconds** |
| **Optimization Focus** | Eliminating all render-blocking resources. | Prioritizing the loading and rendering of the single largest element. |
| **Relationship** | FCP always occurs *before* LCP. | LCP is a more meaningful measure of perceived load completion. |

By focusing on a fast FCP, you manage the user's initial anxiety. By focusing on a fast LCP, you confirm the page is ready for use. A truly immersive web experience is one where the time between FCP and LCP is minimal, giving the user a seamless transition from "loading" to "ready."
