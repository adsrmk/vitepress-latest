# Disable Cron Jobs

By default, WordPress handles scheduled tasks (like checking for updates or publishing scheduled posts) using a script called wp-cron.php.
While convenient, this "pseudo-cron" system only runs when someone visits your website. On high-traffic sites, this can waste server resources by firing on every page load. 
On low-traffic sites, scheduled tasks might be missed entirely if no one visits the site at the right time.

Additionally, if a site uses Full Page Caching (like Varnish or Cloudflare), a visitor might see a cached version of the page without ever "hitting" WordPress. In this case, wp-cron.php won't trigger at all, making a system-level cron job even more essential.

The solution is to disable the internal WordPress cron and replace it with a system-based cron job.

<br>


## Guide

To stop WordPress from running the cron script on every page load, you need to edit your wp-config.php file.

1. Log in to the Cloud panel and open file manager.
2. Navigate to your website's root directory: /public_html/
3. Find the wp-config.php file, right-click it, and select Edit.
4. Scroll down to the bottom of the file and find the line that says: /* That's all, stop editing! Happy blogging. */
5. Just above that line, paste the following code:
```php [/public_html/wp-config.php]
  define('DISABLE_WP_CRON', true);
```
6. Click Save Changes

<br>


### Setup cron-jobs trough system

Now that the internal trigger is disabled, you must tell the server to run the script manually on a fixed schedule.

1. Return to the Cloud Panel dashboard.
2. Select your site and go to **Advanced > Developer Tools**.
3. Click **Cron Jobs** in the left-hand sidebar.
4. Select **Add Cron Job**.
5. Input the Execution Type and Interval, then save.

<br>

**Important:** Please monitor your site's functionality after this setup to ensure tasks are triggered as expected. If you need to change the frequency, you can adjust the schedule at any time within the Cron Job management area of your control panel.


   
