# Dequeue Scripts and Styles

By default, WordPress loads several styles and scripts, even if your site doesn't use them. This can **increase page load time** due to unnecessary assets being loaded.  
We can prevent WordPress from loading these files by **dequeuing** them.

<br>

**Dequeue Gutenberg**
Gutenberg is WordPress’s built-in block editor, which some users may not use—especially if they rely on a page builder instead.


```php
<?php
function dequeue_gutenberg_assets() {
    // Styles
    wp_dequeue_style('wp-block-library');          // Core block styles
    wp_dequeue_style('wp-block-library-theme');    // Theme block styles
    wp_dequeue_style('wc-block-style');            // WooCommerce block styles (if using)
    
    // Scripts
    wp_dequeue_script('wp-block-library');         // Core block scripts
    wp_dequeue_script('wp-editor');                // Editor scripts
}
add_action('wp_enqueue_scripts', 'dequeue_gutenberg_assets', 100);
add_filter('use_block_editor_for_post', '__return_false');
```


### How it works

- `wp_dequeue_style()` and `wp_dequeue_script()` tell WordPress not to load specific CSS or JS files on the front-end.
- The 100 priority ensures this runs after all scripts and styles have been enqueued, so we can safely remove them.
- This can help improve page speed and reduce unnecessary load, especially if you’re not using Gutenberg for this example.
