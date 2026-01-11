# Speculation Rules API

The Speculation Rules API is a JSON-based configuration that allows developers to programmatically tell the browser to prefetch (download resources) or prerender (render the entire page in the background) specific URLs.
Unlike the older link preloading, this API provides granular control over "eagerness" and supports full page rendering, making page transitions feel truly instant.

## Basic implementation

The simplest way to use the API is by providing a list of specific URLs you want the browser to prepare.

```html [/public_html/wp-content/themes/your_theme/header.php]
<script type="speculationrules">
{
  "prerender":  [ 
    {
      "source": "list",
      "urls": ["/page1", "/page2", "/page3"],
      "eagerness": "eager"
    }
  ]
}
</script>
```
<br>

### Key Concepts:

- Prefetch: Downloads the HTML and assets into the cache.
- Prerender: Downloads the page, executes JavaScript, and builds the DOM in an invisible tab.

**Eagerness:**
- `immediate:` As soon as the rule is parsed.
- `eager:` On any slight hint of intent (like moving the mouse toward a link).
- `moderate:` On a "pointer down" (the moment the user clicks but before they release).
- `conservative:` Only on hover or mouse down.

<br>


## Document-based
Instead of listing every URL, you can use Document Rules. This tells the browser to automatically speculate on links it finds in the HTML that match certain patterns.

```html
<script type="script/speculationrules">
{
  "prerender": [
    {
      "source": "document",
      "where": {
        "and": [
          { "href_matches": "/*" },
          { "not": { "href_matches": ["/logout", "/admin/*", "*/wp-admin/*"] } },
          { "not": { "selector_matches": ".my_button" } }
        ]
      },
      "eagerness": "moderate"
    }
  ]
}
</script>
```

- `href_matches:` Uses glob patterns to inclde or exclude paths.
- `selector_matches:` Allows you to exclude specific links based on CSS classes (e.g., preventing the logout button from being "clicked" in the background).

<br>

## Deployment

You may place the rules directly in the HTML as an **inline script in either the header or body**. When added near the end of the 'body', it *avoids blocking initial rendering* while activating as soon as the user starts interacting.

Alternatively, for more advanced or CMS-restricted environments, you can deliver the rules via an HTTP response header. This is useful when you don’t have direct access to the HTML template. In that case, the browser loads the rules from a JSON file using the Speculation-Rules response header.
