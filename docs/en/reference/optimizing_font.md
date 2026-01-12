# Optimzed Font Delivery

In 2026, web fonts are no longer the "performance killers" they once were, provided you handle them with modern techniques. 
Poor font implementation leads to two major issues: **FOIT (Flash of Invisible Text) and CLS (Cumulative Layout Shift)**.


## .WOFF2
**Forget .ttf, .otf, or the original .woff.** WOFF2 is the only format you should serve. It uses Brotli compression internally and is roughly 30% smaller than its predecessor.

```css
@font-face {
  font-family: 'Inter';
  src: url('fonts/inter-bold.woff2') format('woff2'); [!code focus]
  font-weight: 700;
  font-display: swap;
}
```
<br>

## FOIT (Flash of Invisible Text)
The font-display property determines how the browser behaves while the font file is still downloading.

| Value     | Behavior                                                                 | Best For                                           |
|-----------|--------------------------------------------------------------------------|---------------------------------------------------|
| swap      | Shows system font immediately, then swaps once the font is loaded         | General body text (prioritizes readability)       |
| fallback  | Brief invisibility (~100ms), then system font, then swap                  | Balanced UX and performance                       |
| optional  | If the font isn't ready in ~100ms, the browser never swaps                | Best for performance and CLS (prevents layout jank) |
| block     | Hides text until the font is ready (up to 3s)                             | Avoid unless the font is an icon set               |

<br>

## Self-hosted fonts

While Google Fonts is convenient, Self-hosting is now the standard for high-performance sites for multiple reasons:

- **No Extra DNS Lookup:*8 You don't need a preconnect to fonts.gstatic.com.
- **Predictability:** You control the caching headers (Cache-Control: immutable).
- **Privacy:** No third-party tracking, making it GDPR/CCPA friendly.

To self-host certain fonts, you can use the [Google Webfonts Helper](https://gwfh.mranftl.com/fonts) to easily download the font files and generate the required CSS for quick and correct setup. 
