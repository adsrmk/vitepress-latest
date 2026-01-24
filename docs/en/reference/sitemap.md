## XML Sitemaps in WordPress

An XML Sitemap is a file that lists all the important URLs on your website, acting as a roadmap for search engine crawlers. It tells them which pages you consider important, when they were last updated, and how frequently they change.

While WordPress (since version 5.5) automatically generates a basic sitemap, developers often need to customize this output for optimal SEO performance.


<img width="1016" height="665" alt="image" src="https://github.com/user-attachments/assets/fd801880-252b-4b32-97a9-aaeeec21d0a4" />


<br>

## Why the Default Sitemap Isn’t Always Enough

The default WordPress sitemap is a great starting point, but it has limitations:

- **It’s too inclusive**  
  It includes every public post, page, category, and tag by default. This can lead to search engines indexing *thin content* pages (e.g., a tag used on only one post).

- **It lacks media information**  
  The default sitemap does not include image or video metadata, which is a missed opportunity for ranking in image and video search.

- **Limited control**  
  Customization options are minimal and require code.

A well-managed sitemap strategy focuses crawlers on high-value content, saves crawl budget, and prevents indexing of low-quality pages.

<br>

## Customizing the Core WordPress Sitemap

You can programmatically control the core sitemap using filters in your theme’s `functions.php` or a custom plugin.


### 1. Excluding an Entire Post Type
If you have a custom post type that should not be indexed (e.g. `internal_docs`), remove it from the sitemap.

```php
/**
 * Exclude a specific post type from the XML sitemap.
 */
add_filter( 'wp_sitemaps_post_types', 'exclude_post_type_from_sitemap' );

function exclude_post_type_from_sitemap( $post_types ) {
    // The key 'my_secret_cpt' is the name of the custom post type.
    unset( $post_types['my_secret_cpt'] );
    return $post_types;
}
```


### 2. Excluding a Specific Post by ID
Useful for pages like “Thank You” that should remain public but not indexed.

```php
/**
 * Exclude a specific post or page by its ID from the sitemap.
 */
add_filter( 'wp_sitemaps_posts_query_args', 'exclude_specific_post_from_sitemap', 10, 2 );

function exclude_specific_post_from_sitemap( $args, $post_type ) {
    // Exclude post with ID 123.
    $args['post__not_in'] = isset( $args['post__not_in'] ) ? $args['post__not_in'] : [];
    $args['post__not_in'][] = 123;

    // Example: Exclude multiple posts/pages
    // $args['post__not_in'] = array_merge($args['post__not_in'], [123, 456, 789]);

    return $args;
}
```


### 3. Disabling the Core Sitemap Entirely
If you use a dedicated SEO plugin (e.g. Yoast SEO or Rank Math), disable the core sitemap to avoid conflicts


```php
/**
 * Disable the core WordPress XML sitemap.
 * Recommended when using an SEO plugin.
 */
add_filter( 'wp_sitemaps_enabled', '__return_false' );
```





