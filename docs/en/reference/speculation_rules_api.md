# Speculation Rules API

The Speculation Rules API is a JSON-based configuration that allows developers to programmatically tell the browser to prefetch (download resources) or prerender (render the entire page in the background) specific URLs.
Unlike the older link preloading, this API provides granular control over "eagerness" and supports full page rendering, making page transitions feel truly instant.

## Basic implementation

The simplest way to use the API is by providing a list of specific URLs you want the browser to prepare.

```html [/public_html/wp-content/themes/your_theme/header.php]
<script type="speculationrules">
{
  "prerender":  [ [!code warning]
    {
      "source": "list",
      "urls": ["/page1", "/page2", "/page3"],
      "eagerness": "eager"
    }
  ]
}
</script>
```

### Key Concepts:

- Prefetch: Downloads the HTML and assets into the cache.
- Prerender: Downloads the page, executes JavaScript, and builds the DOM in an invisible tab.

**Eagerness:**
::: Eagerness

immediate: As soon as the rule is parsed.

eager: On any slight hint of intent (like moving the mouse toward a link).

moderate: On a "pointer down" (the moment the user clicks but before they release).

conservative: Only on hover or mouse down.
:::
