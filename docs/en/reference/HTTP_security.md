# HTTP Security Headers

Beyond firewalls and application-level security, we can give the browser specific instructions on how to behave when handling our site's content. We do this by sending HTTP Security Headers. These headers are sent from the server with every response and act as a set of security policies that the browser agrees to enforce.
Implementing these is a fast, high-impact way to protect your site and its users from common attacks like clickjacking, cross-site scripting (XSS), and protocol downgrade attacks.

# How to Implement Headers in WordPress

You can implement these headers in two primary ways:

### 1. Web Server Configuration (Recommended)
Configure headers directly in your web server configuration file such as httpd config, or nginx.conf

### 2. WordPress (PHP-Based)
Add headers via your theme’s `functions.php` file or a custom plugin using PHP’s `header()` function.

This approach is easier for developers to manage and version control.
> In the examples below, this method is used and hooked into the `send_headers` action.

```php
add_action( 'send_headers', 'add_security_headers' );

function add_security_headers() {
    // All header() calls will go in here
}
```

