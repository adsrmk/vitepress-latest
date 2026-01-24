# Indexing

As developers, we have precise tools to tell search engine bots (like Googlebot) how to crawl and index our website. It’s not enough to just create content; we must actively guide search engines to ensure they focus on high-value pages and ignore irrelevant ones. This saves crawl budget and prevents messy search results.

The primary tools at our disposal are the `robots.txt` file, the meta robots tag, and the **X-Robots-Tag** HTTP header. Each has a specific purpose.

<br>

## 1. The robots.txt File

The **robots.txt** file is a plain text document located at your domain's root (e.g., `yourdomain.com/robots.txt) that compliant bots consult before crawling; its purpose is to provide broad instructions by specifying which sections of your site bots should not attempt to access.


### Best For
- Blocking access to backend areas (`/wp-admin/`)
- Preventing crawling of files that don’t need to be indexed (`/wp-includes/`, `/wp-content/plugins/`)
- Blocking access to internal search result pages (`Disallow: /?s=`)

### Limitation
It is a directive, not a firewall. Malicious bots will ignore it.  
If a disallowed page is linked to from elsewhere on the web, Google may still index it (without crawling its content), showing it in search results with a message like *“No information is available for this page.”*

**A Recommended robots.txt for WordPress:**
```text
User-agent: *
# Disallow crawling of backend and non-public asset folders
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/

# Allow the AJAX endpoint, as it's used by some frontend functionalities
Allow: /wp-admin/admin-ajax.php

# Disallow internal search results to prevent crawl waste
Disallow: /?s=
Disallow: /search/

# Explicitly state the location of your sitemap
Sitemap: https://www.yourdomain.com/sitemap_index.xml
```

> Warning: Never use robots.txt to hide a page from search results. Use the noindex meta tag instead.

<br>



## 2. The `meta name="robots"` Tag

The Meta Robots Tag is an HTML element placed within the `<head>` of a specific page to provide crawlers with explicit instructions on how to handle that single URL. Its purpose is to control the indexing and link-following behavior for an individual page, offering a far more definitive method than `robots.txt` for ensuring specific content does not appear in search results.


### Key Directives

- **index**  
  Allow the page to be indexed (default).

- **noindex**  
  Do not show this page in search results. This is the most important directive for controlling indexing.

- **follow**  
  Allow crawlers to follow the links on this page (default).

- **nofollow**  
  Do not follow any links on this page. This can be used to prevent passing link equity.

### Common Combinations

- **noindex, follow**  
  “Don’t index this page, but you can still follow the links on it to find other good pages.”  
  This is the most common and useful combination for low-value pages such as paginated archives, author pages on a single-author blog, or “Thank You” pages.

- **noindex, nofollow**  
  “Don’t index this page, and don’t trust any of the links on it.”  
  Useful for pages with user-generated content that you don’t want to endorse.

### Implementation in WordPress

You can add this tag programmatically via a function.  
For example, to noindex all paginated archive pages after page 1:

```php
/**
 * Add a 'noindex, follow' meta tag to paginated archives.
 */
add_action('wp_head', 'noindex_paginated_archives');

function noindex_paginated_archives() {
    // is_paged() checks if we are on page 2 or greater of an archive.
    if ( is_paged() ) {
        echo '<meta name="robots" content="noindex,follow" />';
    }
}
```

<br>


## 3. The X-Robots-Tag HTTP Header

This works exactly like the meta robots tag, but it is sent as part of the HTTP response header from the server.

### Purpose
Provide indexing instructions for resources that are not HTML pages, such as PDFs, images, or documents. Since you cannot add a `<meta>` tag to a PDF file, this is the only way to control its indexing.

### Implementation
This is configured at the server level (e.g. `.htaccess` for Apache or `nginx.conf` for Nginx) or programmatically via PHP.

**Example: Using PHP to prevent PDFs from being indexed**
```php
/**
 * Add an X-Robots-Tag HTTP header to block PDF indexing.
 */
add_action('template_redirect', 'block_pdf_indexing');

function block_pdf_indexing() {
    // Check if the current request is for a PDF file.
    if ( is_attachment() && strpos( get_post_mime_type(), 'application/pdf' ) !== false ) {
        header('X-Robots-Tag: noindex,nofollow');
    }
}
```

<br>


| Task                                                         | robots.txt | meta name="robots" | X-Robots-Tag |
| :----------------------------------------------------------- | :----------- | :------------------- | :------------- |
| Block crawling of a whole directory (e.g., `/wp-admin/`)| **Yes**      | No                   | No             |
| Prevent a single page from appearing in search results   | No           | **Yes**              | Yes            |
| Prevent a PDF or image file from being indexed           | No           | No                   | **Yes**        |
| Save crawl budget on low-value sections                  | **Yes**      | Yes                  | Yes            |


