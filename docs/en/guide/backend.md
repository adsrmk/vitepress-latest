# Secure wp-login backend

Securing the /wp-login.php page is a effective step you can take to protect a WordPress website. 
Because it is the default "front door" for every WordPress site, it is also the primary target for hackers and automated bots.


## Why secure the wp-login.php page?

By default, the WordPress login page is publicly accessible at `yourdomain.com/wp-login.php` or `yourdomain.com/login` This makes it vulnerable to two specific threats:

- **Brute Force Attacks:** Automated bots attempt thousands of username and password combinations per minute to gain unauthorized access.
- **Server Resource Exhaustion:** Even if the bots fail to log in, every login attempt triggers a *PHP process.* A heavy attack can spike resource usage, slowing down your site or crashing the server.

There are several methods you can do to secure your site.


## Method 1 - Change the Login URL

The most effective way to stop "blind" bots is to move the door. Instead of the standard URL, you choose something unique like /private-access or /my-secret-entry.

**How:** Use a lightweight plugin like [WPS Hide Login](https://nl.wordpress.org/plugins/wps-hide-login/).

**The Benefit:** It’s simple and requires no technical knowledge. Once changed, any bot trying to reach the old wp-login.php will receive a 404 "Not Found" error.

<br>


## Method 2 - Use a Web Application Firewall (WAF)

A firewall acts as a filter between your site and the rest of the internet. Services like *Cloudflare, Sucuri*, or plugins like *Wordfence* can block suspicious traffic before it reaches your login page.

**Cloudflare:** You can set a "Page Rule" to force a JavaScript challenge (managed challenge) for anyone visiting wp-login.php
**Wordfence:** This plugin maintains a global database of malicious IP addresses and blocks them automatically if they show "bot-like" behavior.

<br>

## Method 3 - Restrict Access by IP

If you have a consistent IP address, you can restrict access to wp-login.php directly within your wp-config.php file. Please note that this will block any IP address that does not match your specific input. This is an ideal security setup for customers using our Cloud Panel SSO, as you can still bypass the login screen via the dashboard while keeping the site locked down against brute-force attacks.

To enable this, add this code at the top of wp-config.php

```php [.public_html/wp-config.php]
// Security: Restrict wp-login.php to specific IPs
if (strpos($_SERVER['REQUEST_URI'], 'wp-login.php') !== false) {
    $allowed_ips = ['123.456.789.000', '111.222.333.444']; // Add your IPs here
    if (!in_array($_SERVER['REMOTE_ADDR'], $allowed_ips)) {
        header('HTTP/1.1 403 Forbidden');
        die('Access Denied: Your IP address is not authorized.');
    }
}
```
<br>

### Extra snippet

By default, WordPress displays detailed login error messages, such as whether a username or password is incorrect. 
While helpful for users, this information can also aid attackers by confirming valid usernames. Since most site owners and developers already know their usernames, this can be disabled.
Add this in the `functions.php` file of your current theme.

add_filter('login_errors', function() {
    return 'Login failed.';
});


