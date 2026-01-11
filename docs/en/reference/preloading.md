# Link Preloading

Link preloading is a performance optimization technique that tells the browser to download a resource 
*(like a script, stylesheet, or image)* as soon as possible because it will be needed for the current or subsequent page. 
By initiating the fetch earlier in the page lifecycle, you can significantly reduce **Largest Contentful Paint (LCP)** and improve the overall user experience.

There are several ways to "hint" to the browser that it should fetch or prepare for a link. Choosing the right one depends on when and where the resource will be used.

| Directive          | Purpose                                                       |
| --------------- | ----------------------------------------------------------------- |
| `preload` | High-priority fetch for the current page.|
| `prefetch` | Low-priority fetch for the next navigation.                            |
| `preconnect` | Establishes a connection (DNS + TCP + TLS) to a domain.              |
| `dns-prefetch`    | Resolves the DNS for a domain only.                             |
