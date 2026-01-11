# Obfuscate WordPress files/version

There are a few simple snippets that can help improve your WordPress site’s security. These primarily hide version information from files and RSS feeds, preventing anonymous visitors from easily identifying which WordPress version your site is running. 

In your theme folder, find the `functions.php` and add the following at the top under **<?php**
<br>

### Removes RSS and WP version

By default, WordPress includes its version number in both the site header and RSS feeds. Exposing this information can make it easier for attackers to target known vulnerabilities. Removing the version improves security without affecting functionality.

```php
// Remove WordPress version from header
remove_action('wp_head', 'wp_generator');

// Remove version from RSS feeds
function remove_wp_version_rss() {
    return '';
}
add_filter('the_generator', 'remove_wp_version_rss');
```

<br>


### Delete versions from styles and scripts

By default, WordPress appends its version number to CSS and JavaScript files as a query string (e.g., style.css?**ver=6.5**). While this helps with caching, it also **exposes** your file versions to potential attackers. Removing these version strings enhances security without affecting functionality.

The following snippet removes version numbers from all enqueued CSS and JS files:

```php
// Remove version query strings from static files
function remove_cssjs_ver($src) {
    if (strpos($src, 'ver=') !== false) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('style_loader_src', 'remove_cssjs_ver', 10, 2);
add_filter('script_loader_src', 'remove_cssjs_ver', 10, 2);
```

