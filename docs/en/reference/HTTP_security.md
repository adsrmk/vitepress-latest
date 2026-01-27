# HTTP Security Headers

Beyond firewalls and application-level security, we can give the browser specific instructions on how to behave when handling our site's content. We do this by sending HTTP Security Headers. These headers are sent from the server with every response and act as a set of security policies that the browser agrees to enforce.
Implementing these is a fast, high-impact way to protect your site and its users from common attacks like clickjacking, cross-site scripting (XSS), and protocol downgrade attacks.

You can implement these headers in two primary ways:

### Web Server Configuration
Configure headers directly in your web server configuration files, such as httpd.conf (Apache) or nginx.conf (Nginx).

If you host your website with us, most of these headers are already configured at the Nginx level. However, some security scanning tools may not detect them correctly. In that case, you can optionally apply the headers using option 2 to ensure they are visible and detected.

### WordPress (PHP-Based)
Add headers via your theme’s `functions.php` file or a custom plugin using PHP’s `header()` function.

This approach is easier for developers to manage and version control.
> In the examples below, this method is used and hooked into the `send_headers` action.

```php
add_action( 'send_headers', 'add_security_headers' );

function add_security_headers() {
    // All header() calls will go in here
}
```


<br>


### 1. HTTP Strict Transport Security (HSTS)

This is the most important header for any site that uses HTTPS. It tells the browser that it should only ever communicate with your site using a secure HTTPS connection.
What it prevents: SSL stripping and man-in-the-middle attacks, where an attacker tries to downgrade a user's connection from HTTPS to insecure HTTP.
How it works: After a user's first visit, the browser remembers the HSTS policy. For all future visits within the max-age window, the browser will refuse to connect via HTTP and will automatically upgrade all requests to HTTPS, even if the user types http:// or clicks an insecure link.

```php
// Inside your add_security_headers( ) function:
// max-age is in seconds. 1 year = 31536000 seconds.
// 'includeSubDomains' applies the policy to all subdomains.
// 'preload' is for submission to the HSTS preload list (see below).
header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
```


### 2. X-Frame-Options

This header prevents other websites from embedding your site in an `<iframe>`, `<frame>`, or `<object>`.

**What it prevents:**  
Clickjacking. This is an attack where a malicious site loads your site in a transparent iframe over their own content. The attacker tricks the user into clicking what appears to be a harmless button, but the click actually targets a hidden element on your site (for example, **Delete Account** or **Confirm Purchase**).

**How it works:**  
The browser checks this header and refuses to render the page inside a frame if the policy forbids it.

```php
// DENY: No one can embed your site. This is the most secure option.
header('X-Frame-Options: DENY');

// SAMEORIGIN: Only your own site can embed its pages.
// header('X-Frame-Options: SAMEORIGIN');
```


### 3. X-Content-Type-Options

This simple but effective header forces the browser to respect the `Content-Type` sent by your server and disables **MIME-type sniffing**.

**What it prevents:**  
MIME-sniffing attacks. For example, if a user uploads a file that appears to be an image (`image.jpg`) but actually contains malicious JavaScript, some browsers might inspect the file’s contents, decide it is a script, and execute it.

**How it works:**  
This header has only one valid directive: `nosniff`. It tells the browser to never second-guess the server’s declared `Content-Type`. If the server says a file is `image/jpeg`, the browser will treat it strictly as an image.

```php
header('X-Content-Type-Options: nosniff');
```


### 4. Referrer-Policy

This header controls how much referrer information the browser includes when a user clicks a link to navigate away from your site.

**What it prevents:**  
Accidentally leaking sensitive information through URLs. If your URL structure contains private data (for example, `yourdomain.com/user/123/reset-password-token`), you don’t want the full URL to be sent to the destination site in the `Referer` header.

**How it works:**  
It allows you to define a policy that controls how much (or how little) referrer information is sent with outgoing requests.

```php
// 'strict-origin-when-cross-origin': Sends the full URL when navigating within your own site,
// but only sends the origin (e.g., https://yourdomain.com/ ) when navigating to a different site.
// This is a great, secure default that preserves privacy while still allowing analytics to see where traffic came from.
header('Referrer-Policy: strict-origin-when-cross-origin');
```



### 5. Content-Security-Policy (CSP)

This is the most complex and powerful security header. It deserves its own full section, but it’s important to mention here. CSP allows you to define a whitelist of sources from which the browser is allowed to load assets such as scripts, styles, images, and fonts.

**What it prevents:**  
Cross-Site Scripting (XSS) and other data injection attacks.

<div class="warning custom-block" style="padding-top: 8px">
A full CSP implementation requires careful auditing of all assets loaded on your site and is a much larger topic. The four headers above are the "quick wins" that can be implemented on almost any site with minimal configuration.</div>


```php
// This policy only allows scripts to be loaded from our own domain.
header("Content-Security-Policy: script-src 'self'");
```











