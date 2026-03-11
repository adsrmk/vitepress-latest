# Obfuscate WP structure

you can hide wordpress structure for more protection against hackers. It will change directories and structural path of wordpress. You can also rename certain plugins. 
Please note that this is not a securtity feature. its merely to hide certain wp features.


## Rewrites

you can rewrite the wp-content directory to anything you like. simply add this in wp-config.php and change **/assets** to anything.

```php /wp-config.php
define('WP_CONTENT_DIR', dirname(__FILE__) . '/assets');
define('WP_CONTENT_URL', '/assets');
```
<br>

### Plugins
This can also be done for the /plugins directory. Make sure that the first value equals as the one set above, in this case **assets/...**

```php /wp-config.php
define('WP_PLUGIN_DIR', dirname(__FILE__) . '/assets/lib');
define('WP_PLUGIN_URL', '/assets/lib');
```
<br>

### Change uploads

```php /wp-config.php
define('UPLOADS', 'assets/img');
```
