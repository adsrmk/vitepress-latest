# Uploading media gives an error


```
The server cannot process the image. This can happen if the server is busy or does not have enough resources to complete the task. Uploading a smaller image may help. Suggested maximum size is 2560 pixels.```
```

This error usually happens when you’re using WordPress’s built-in media uploader. 
When an image is added to a post or the media library in WordPress, 
the file is uploaded to the server, an attachment record is generated, and the PHP image processing module performs the necessary optimizations and resizing

## Troubleshoot 

1. Refresh the page, wait a few minutes and attempt the upload again (preferably one image at a time if you were performing a bulk upload). This issue can occur during bulk operations or when server CPU cycles are fully utilized during image processing.
2. If that didn't work, try uploading a image of lower dimensions then 2560 pixels in width or height.
3. Increase memory limit on Wordpress - The error message suggests that your server may not have enough resources. So we need to increase our PHP memory limit on the website. This can be achieved by adding the following line of code to your wp-config.php file:

4. ```html [public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '256M' );
```

