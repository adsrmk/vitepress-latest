# Disable Cron Jobs

By default, WordPress handles scheduled tasks (like checking for updates or publishing scheduled posts) using a script called wp-cron.php.
While convenient, this "pseudo-cron" system only runs when someone visits your website. On high-traffic sites, this can waste server resources by firing on every page load. 
On low-traffic sites, scheduled tasks might be missed entirely if no one visits the site at the right time.

The solution is to disable the internal WordPress cron and replace it with a system-based cron job.


## Guide

To stop WordPress from running the cron script on every page load, you need to edit your wp-config.php file.

1. Log in to the Cloud panel and open file manager.
2. Navigate to your website's root directory: /public_html/
3. Find the wp-config.php file, right-click it, and select Edit.
4. Scroll down to the bottom of the file and find the line that says: /* That's all, stop editing! Happy blogging. */
5. Just above that line, paste the following code:
   

   
`
