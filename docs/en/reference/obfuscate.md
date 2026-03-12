# Obfuscate WordPress Structure

You can hide the WordPress structure for additional protection against automated scanners and basic attacks. This changes the directories and structural paths used by WordPress.

> **Note:** This is **not a security feature**. It only obscures WordPress-specific paths and fingerprints. Proper security measures (updates, firewalls, authentication hardening, etc.) are still required.



# Rewrites

You can rewrite the `wp-content` directory to any path you prefer. Add the following to **wp-config.php** and replace `/assets` with your preferred directory.

```php
// wp-config.php
define('WP_CONTENT_DIR', dirname(__FILE__) . '/assets');
define('WP_CONTENT_URL', '/assets');
```


### Plugins
You can also rewrite the `/plugins` directory. Make sure the path matches the directory defined above (`assets/...`).

```php /wp-config.php
define('WP_PLUGIN_DIR', dirname(__FILE__) . '/assets/lib');
define('WP_PLUGIN_URL', '/assets/lib');
```
<br>

### Change uploads

You can move the uploads directory to a custom path:

```php /wp-config.php
define('UPLOADS', 'assets/img');
```
<br>


> **Note:** If you change these directories, make sure the actual folders on disk are also renamed, otherwise WordPress will not be able to locate them.

<br>

<img width="1187" height="357" alt="image" src="https://github.com/user-attachments/assets/13c075ec-0f5c-4de4-b621-899b19ced371" />

<br>

<br>



Example mapping:

| Default      | New Path       |
| ------------ | -------------- |
| `wp-content` | /assets      |
| `plugins`    | /assets/lib  |
| `themes`     | /assets/core |
| `uploads`    | /assets/img  |

<br>


### Disable Month/Year Upload Folders (Optional)

To prevent WordPress from creating folders like /2026/03/ inside uploads:

1. Log in to the WordPress admin panel
2. Navigate to Settings → Media
3. Disable Organize my uploads into month- and year-based folders
4. Save changes

<img width="552" height="130" alt="image" src="https://github.com/user-attachments/assets/7f4105aa-ab8a-4d8f-88d8-4e9ac4376e0a" />

<br>

## Rename Theme Directory
WordPress does not provide a constant for modifying the theme directory.
Instead, this can be achieved using a MU (Must Use) plugin.

1. Under the `wp-content` (or newly named) directory, create a new folder and name it **mu-plugins**.  
2. Inside this folder, create a new file called `theme-core.php`.  
3. Open the file and paste the following code, updating the theme folder name by replacing **core** with your desired theme folder.

```php /wp-content/plugins/mu-plugins
<?php
add_filter('theme_root', function(){
    return WP_CONTENT_DIR . '/core';
});

add_filter('theme_root_uri', function(){
    return WP_CONTENT_URL . '/core';
});
```
<br>


## NGINX security and performance
For optimal security, restrict all external access to the `mu-plugins` directory — only the server should be able to read its files.  
At the same time, improve performance by adding cache headers for all static assets (images, CSS, and JavaScript) served from `/assets/`.

```vhost.conf
location ~* /mu-plugins/.*\.php$ {
    deny all;
}
location /assets/ {
    expires 30d;
    access_log off;
    log_not_found off;
}

```
