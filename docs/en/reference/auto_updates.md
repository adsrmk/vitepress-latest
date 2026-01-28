# Automatic updates

Keeping WordPress core, themes, and plugins up-to-date is one of the most important security practices for any website. Most successful attacks exploit known vulnerabilities in outdated software—issues that already have patches available. Relying on a human to log in and click "update" is unreliable. Automation is essential to ensure updates are applied consistently and on time.

<br>

### Automatic Updates via wp-config

We can enable automatic updates by adding the appropriate settings to the `wp-config.php` file. This ensures that WordPress core, themes, or plugins are updated automatically without manual intervention.

::: warning 
Updating **theme files** also includes the `functions.php` file. If you have added custom features or modifications, make sure to **save a backup** or copy its contents before updating.  
Failing to do so will overwrite the file, and all custom code will be lost!
:::

```php
/**
 * WordPress Automatic Update Configuration
 */

// 1. Enable automatic updates for the Core.
// This is the default, but it's good to be explicit.
define( 'WP_AUTO_UPDATE_CORE', true );

// 2. Enable automatic updates for plugins.
// This will apply all minor and security updates for plugins.
add_filter( 'auto_update_plugin', '__return_true' );

// 3. Enable automatic updates for themes.
// This will apply all minor and security updates for themes.
add_filter( 'auto_update_theme', '__return_true' );
```

<br>

### Automatic Updates via Cloud Panel

Alternatively, updates can be enabled directly through the cloud management panel. This allows for selective control, enabling automatic updates for specific plugins or themes as needed.

<img width="990" height="135" alt="image" src="https://github.com/user-attachments/assets/05f61a12-9876-4207-8e7c-3ed6eedc79df" />




