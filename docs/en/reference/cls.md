# CLS

Cumulative Layout Shift (CLS) measures how much the elements on a page move around unexpectedly while the page is loading. It quantifies "visual jitter"—for example, when you are about to click a link, but an ad suddenly loads at the top and pushes the link down, causing you to click the wrong thing.

Unlike LCP or INP, CLS is not measured in seconds; it is a calculated score based on the "impact fraction" and "distance fraction" of shifting elements.

<img width="932" height="344" alt="cls_061" src="https://github.com/user-attachments/assets/dca11dd8-fded-4e51-87a2-d472e9a03c22" />
<br>


### Common Causes of Shifting
* **Images without dimensions:** The browser doesn't reserve space, causing text to jump once the image loads.
* **Ads and Embeds:** Dynamic content that "pops" into the layout late.
* **Web Fonts:** "Jumping" text when a custom font swaps with a fallback font.
* **Injected Content:** Banners or forms added via JavaScript above existing content.

<br>

### Reduce CLS
* **Set Explicit Dimensions:** Always include `width` and `height` attributes on images and video elements.
* **Reserve Space for Ads:** Use CSS placeholders (min-height) for dynamic containers so they don't "push" layout.
* **Font Optimization:** Use `font-display: swap` or preload key fonts to minimize shifts.
* **Avoid Top-Injections:** Only add new UI elements below the current viewport unless triggered by a user action.
