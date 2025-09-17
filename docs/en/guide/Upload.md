# Uploading media gives an error


```
The server cannot process the image. This can happen if the server is busy or does not have enough resources to complete the task. Uploading a smaller image may help. Suggested maximum size is 2560 pixels.```
```

This error usually happens when you’re using WordPress’s built-in media uploader. 
When an image is added to a post or the media library in WordPress, 
the file is uploaded to the server, an attachment record is generated, and the PHP image processing module performs the necessary optimizations and resizing

## Troubleshoot 

1. Refresh the page, wait a few minutes and attempt the upload again (preferably one image at a time if you were performing a bulk upload). This issue can occur during bulk operations or when server CPU cycles are fully utilized during image processing.
2. If the issue persists, try uploading an image with dimensions smaller than 2560 pixels in width and /or height. This can help reduce processing requirements and avoid upload errors.
3. **Increase memory limit on Wordpress** - The error message suggests that it may not have enough resources. So we need to increase our PHP memory limit on the website. This can be achieved by adding the following line of code to your wp-config.php file:

```php [public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '168M' );
```
4. Images are processed using two PHP modules: ImageMagick and the GD Library. Wordpress automatically selects one based on availability. However, ImageMagick may encounter memory limitations that can lead to errors during image uploads. To prevent this, you can configure WordPress to use the GD Library as the default image editor.

::: tip 
Please note that implementing this change requires editing your theme's files, which may result in errors if not executed correctly.
If you are not sure what you're doing, we recommend contacting our support team for assistance.
:::

```php [public_html/wp-content/your_theme/funtions.php]
   function wpb_image_editor_default_to_gd( $editors ) {
    $gd_editor = 'WP_Image_Editor_GD';
    $editors = array_diff( $editors, array( $gd_editor ) );
    array_unshift( $editors, $gd_editor );
    return $editors;
}
add_filter( 'wp_image_editors', 'wpb_image_editor_default_to_gd' );


