# Increase Wordpress memory limit


WordPress can sometimes run out of memory, but this doesn’t happen often. It usually occurs on sites with lots of traffic, features, or plugins. 
Memory issues can also happen if there’s a problem with the code in a theme or plugin.

::: details Show error
Allowed memory size of 19242411 (or X amount) bytes exhausted.
:::


In some cases, you'll see details about what memory was being used or requested, along with the specific file making the request. This can help pinpoint where any coding issues might be.
Other times, the issue might simply be that your site needs more memory to function properly. We always recommend that you run your site using the latest supported version of PHP, along with the latest version of WordPress and any theme and plug-ins.


## Guide

From version 5.0 of WordPress, there's a useful Site Health tool built into WordPress so you can see what memory limits are set.
You can find the Site Health under the Tools menu in the WordPress dashboard. Click the Info tab a the top.


1. First, check the Server section. Here, you’ll see the PHP memory limit set on your server. The WordPress PHP limit can never exceed this value. If you're using shared hosting, you won’t be able to increase this limit, as it’s set for all customers to 168MB. However, if you're using our managed VPS services, we can customize the PHP settings for all websites on your server to meet your needs.
2. Once you’ve checked what your server limit is, the next step is to check your WordPress memory limit, which can be adjusted separately. It is default set to 40MB.
3. Expand the WordPress constants section on the Site Health page to see its value. You'll see two WordPress memory limits.


`WP_MEMORY_LIMIT` - This setting controls the PHP memory limit for the front-end of your site. It’s typically the adjustment you’ll need to make if your site is experiencing fatal errors due to memory limitations.
​`WP_MAX_MEMORY_LIMIT` - Sets the PHP memory limit for the admin area of your site. It can be adjusted higher or lower than the WP_MEMORY_LIMIT, as certain admin functions—like using third-party page builders—may require more memory than what’s needed to serve the site to visitors.



To confirm, or set these limits if they are lower than your server PHP limit you'll need to edit the WordPress wp-config.php file.



You'll find this file in the root directory of your site. It can be accessed through the File Manager or with FTP.



Check your wp-config.php for either of the following lines:



define( `WP_MEMORY_LIMIT`, 'xxxM' );
​define( `WP_MAX_MEMORY_LIMIT`, 'xxxM' );



Remember the limits you set can't exceed the server limit.




Save your wp-config.php file and refresh the Site Health page to confirm the new limits are in place.
