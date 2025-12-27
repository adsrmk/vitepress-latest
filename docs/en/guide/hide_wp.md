# Obfuscate WordPress version

Exposing your WordPress version can make your site more vulnerable to attacks. The following steps help hide your version from visitors, RSS feeds, and static files.

### Remove version from site header

To hide your wordpress version from the site header; in your theme folder, search for functions.php and paste the following:

```php
// Remove WordPress version from header
remove_action('wp_head', 'wp_generator');
```

<br>

###  Hide version in RSS Feeds

Also in functions.php, add this snippet

```php
// Remove version from RSS feeds
function remove_wp_version_rss() {
    return '';
}
add_filter('the_generator', 'remove_wp_version_rss');
```

