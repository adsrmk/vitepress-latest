# Automatic updates

Keeping WordPress core, themes, and plugins up-to-date is the most critical security practice for any website. The majority of successful attacks exploit known vulnerabilities in outdated software for which a patch is already available. 
Relying on a human to log in and click "update" is unreliable. Automation is key to enforcement.

### Automatic Updates via wp-config

We can enable automatic updates by adding the appropriate settings to the `wp-config.php` file. This ensures that WordPress core, themes, or plugins are updated automatically without manual intervention.

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


### Automatic Updates via Cloud Panel

Alternatively, updates can be enabled directly through the cloud management panel. This allows for selective control, enabling automatic updates for specific plugins or themes as needed.

<img width="990" height="135" alt="image" src="https://github.com/user-attachments/assets/05f61a12-9876-4207-8e7c-3ed6eedc79df" />




