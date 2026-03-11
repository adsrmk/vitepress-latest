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

If you change the directories, make sure you also rename the folder, or else wordpress cannot find the destined URL
In this particulare exmaple:
- wp-content becomes /assets/
- plugins becomes /lib/
<img width="1187" height="357" alt="image" src="https://github.com/user-attachments/assets/13c075ec-0f5c-4de4-b621-899b19ced371" />


(optionally) You can also disable uploads into month- and year-based folders. 
1, Login to Wordpress back-end
2. Go to **settings** -> **Media**
3. Untik the selected chechbox and hit save.

<img width="552" height="130" alt="image" src="https://github.com/user-attachments/assets/7f4105aa-ab8a-4d8f-88d8-4e9ac4376e0a" />



## Rename theme
Unfortunately. wordpress does not have a constant for changing the theme directory, so we must create one under the mu (must use) plugins directory.

1. create a new map under the wp-content directory and name it **mu-plugins**
2. create a new file and name it theme-core.php
3. paste the following code and edit your desired theme folder by replacing **core**

```php /wp-content/plugins/mu-plugins
<?php
add_filter('theme_root', function(){
    return WP_CONTENT_DIR . '/core';
});

add_filter('theme_root_uri', function(){
    return WP_CONTENT_URL . '/core';
});
```




## NGINX security and performance
For best security practices, block all access to the mu-plugins directory, only the server needs to read this, the rest should be blocked.

```vhost.conf
location ~* /mu-plugins/.*\.php$ {
    deny all;
}
location /assets/ {
    expires 30d;
    access_log off;
}

```
