# Change back-end login

Securing the /wp-login.php page is a effective step you can take to protect a WordPress website. 
Because it is the default "front door" for every WordPress site, it is also the primary target for hackers and automated bots.


## Why secure the wp-login.php page?

By default, the WordPress login page is publicly accessible at 'yourdomain.com/wp-login.php' or 'yourdomain.com/login'. This makes it vulnerable to two specific threats

- **Brute Force Attacks:** Automated bots attempt thousands of username and password combinations per minute to gain unauthorized access.
- **Server Resource Exhaustion:** Even if the bots fail to log in, every login attempt triggers a *PHP process.* A heavy attack can spike resource usage, slowing down your site or crashing the server.

There are several methods you can do to secure your site.


## Method 1 - Change the Login URL

The most effective way to stop "blind" bots is to move the door. Instead of the standard URL, you choose something unique like /private-access or /my-secret-entry.
**How:** Use a lightweight plugin like [WPS Hide Login](https://nl.wordpress.org/plugins/wps-hide-login/).
**The Benefit:** It’s simple and requires no technical knowledge. Once changed, any bot trying to reach the old wp-login.php will receive a 404 "Not Found" error.


## Method 2 - Use a Web Application Firewall (WAF)

A firewall acts as a filter between your site and the rest of the internet. Services like *Cloudflare, Sucuri*, or plugins like *Wordfence* can block suspicious traffic before it reaches your login page.

**Cloudflare:** You can set a "Page Rule" to force a JavaScript challenge (managed challenge) for anyone visiting wp-login.php
**Wordfence:** This plugin maintains a global database of malicious IP addresses and blocks them automatically if they show "bot-like" behavior.


