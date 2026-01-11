# Optimzed Font Delivery

In 2026, web fonts are no longer the "performance killers" they once were, provided you handle them with modern techniques. 
Poor font implementation leads to two major issues: FOIT (Flash of Invisible Text) and CLS (Cumulative Layout Shift).


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

