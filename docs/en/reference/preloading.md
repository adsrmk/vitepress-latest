# Link Preloading

Link preloading is a performance optimization technique that tells the browser to download a resource 
*(like a script, stylesheet, or image)* as soon as possible because it will be needed for the current or subsequent page. 
By initiating the fetch earlier in the page lifecycle, you can significantly reduce **Largest Contentful Paint (LCP)** and improve the overall user experience.

There are several ways to "hint" to the browser that it should fetch or prepare for a link. Choosing the right one depends on when and where the resource will be used.
<br>

| Directive          | Purpose                                                       |
| --------------- | ----------------------------------------------------------------- |
| `preload` | High-priority fetch for the current page.|
| `prefetch` | Low-priority fetch for the next navigation.                            |
| `preconnect` | Establishes a connection (DNS + TCP + TLS) to a domain.              |
| `dns-prefetch`    | Resolves the DNS for a domain only.                             |


## 1. Implementing preload
Use preload for critical assets that the browser’s discovery scanner might miss (e.g., fonts defined inside CSS or background images).

```html
<link rel="preload" href="style.css" as="style">
<link rel="preload" href="main.js" as="script">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### Key Attributes

- **as:** Required. Tells the browser the type of content so it can set the correct priority and security headers. Common values: script, style, font, image, fetch.
- **crossorigin:** Required for fonts. Even if the font is on the same domain, fonts must be fetched using anonymous mode CORS.
- **type:** Optional but helpful for the browser to skip files it doesn't support (e.g., type="image/webp").

